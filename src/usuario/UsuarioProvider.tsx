import {UsuarioContext} from "./UsuarioContext";
import {ReactNode, useCallback, useEffect, useReducer} from "react";
import {usuarioInitialState, usuarioReducer} from "./Reducer";
import {Usuario} from "./Interfaces";

interface ProviderProps {
  children: ReactNode;
}

export function UsuarioProvider({children}: ProviderProps) {
  const usuariosDIO = [
    {nome: 'matheus_camilo1617', xpDesconto: 1080, xpAdd: 0},
    {nome: 'jairoderivia', xpDesconto: 520, xpAdd: 0},
    {nome: 'denitborges', xpDesconto: 360, xpAdd: 0},
    {nome: 'thayroni_spr', xpDesconto: 2320, xpAdd: 0},
    {nome: 'lyn_mederos', xpDesconto: 80, xpAdd: 0},
    {nome: 'alissonmanica_aai', xpDesconto: 1122, xpAdd: 200},
    {nome: 'daniel_monroe_paz', xpDesconto: 280, xpAdd: 0},
    {nome: 'joaovitor_jf42', xpDesconto: 920, xpAdd: 0},
    {nome: 'wesleymeireles_meireles', xpDesconto: 7050, xpAdd: 0},
    {nome: 'FRAGAEDUARDO6', xpDesconto: 120, xpAdd: 0},
    {nome: 'gabrieltogni', xpDesconto: 1200, xpAdd: 0},
    {nome: 'wagnereduardo34', xpDesconto: 120, xpAdd: 0},
    {nome: 'gabriele_jacques', xpDesconto: 120, xpAdd: 200},
    {nome: 'aronfsouza', xpDesconto: 4140, xpAdd: 0},
    {nome: 'tiago_jb_1', xpDesconto: 440, xpAdd: 0},
    {nome: 'rafaela_contato2018', xpDesconto: 0, xpAdd: 0},
    {nome: 'guiuser1999', xpDesconto: 5180, xpAdd: 200},
    {nome: 'yanfhausmann', xpDesconto: 1320, xpAdd: 0},
    {nome: 'rodrigorosadossantos', xpDesconto: 200, xpAdd: 0},
    {nome: 'rafael_dapper152', xpDesconto: 1179, xpAdd: 0},
    {nome: 'schoolartogni', xpDesconto: 600, xpAdd: 200},
    {nome: 'bibianagabriela01', xpDesconto: 160, xpAdd: 0},
    {nome: 'andregranemann', xpDesconto: 1240, xpAdd: 0},
    {nome: 'stephanymberbel1400', xpDesconto: 320, xpAdd: 0},
    {nome: 'lucas_roquef', xpDesconto: 5120, xpAdd: 0},
    {nome: 'pro_goncalves', xpDesconto: 4094, xpAdd: 0},
    {nome: 'jardon_m_martins', xpDesconto: 7345, xpAdd: 0},
    {nome: 'flaviagoudinho39', xpDesconto: 240, xpAdd: 0},
    {nome: 'renan_vieira_88', xpDesconto: 2000, xpAdd: 0},
  ];

  const [{usuarios}, action] = useReducer(usuarioReducer, usuarioInitialState);

  const carregarUsuarios = useCallback(async () => {
    const authHeader = new Headers();
    authHeader.append('Authorization', `Token 9749f638abb2478ba3dec1db1576cdaccbd358cb`);

    const configInit: RequestInit = {
      method: 'GET',
      headers: authHeader,
      cache: 'default'
    };
    action({name: 'setListUsuario', value: []});
    usuariosDIO.map((usuario) => {
      fetch(`https://app.digitalinnovation.one/api/users/${usuario.nome}/`, configInit)
        .then(res => res.json())
        .then(res => {
          const user = res as Usuario;
          console.log(`{nome: '${usuario.nome}', xpDesconto: ${user.meta.experience}, xpAdd: 0},`)
          user.meta.experience = (parseInt(user.meta.experience) + usuario.xpAdd - usuario.xpDesconto) + '';

          user.perfil = `https://web.digitalinnovation.one/users/${usuario.nome}`;
          usuarios.push(user);
          usuarios.sort((obj1, obj2) => {
            const aExperience = parseInt(obj1.meta.experience);
            const bExperience = parseInt(obj2.meta.experience);

            if (aExperience > bExperience) {
              return -1;
            } else if(aExperience === bExperience) {
              return (obj1.name < obj2.name) ? -1 : (obj1.name > obj2.name) ? 1 : 0;
            }
            return 0;
          });
          action({name: 'setListUsuario', value: usuarios});
        });
    });
  }, []);

  useEffect(() => {
    carregarUsuarios();
  }, [])

  return (
    <UsuarioContext.Provider
      value={{
        usuarios
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}
