import {UsuarioContext} from "./UsuarioContext";
import {ReactNode, useCallback, useEffect, useReducer} from "react";
import {usuarioInitialState, usuarioReducer} from "./Reducer";
import {Usuario} from "./Interfaces";

interface ProviderProps {
  children: ReactNode;
}

export function UsuarioProvider({children}: ProviderProps) {
  const usuariosDIO = [
    {nome: 'bibianagabriela01', xpDesconto: 160},
    {nome: 'juroque81', xpDesconto: 40},
    {nome: 'killianms', xpDesconto: 0},
    {nome: 'stephanymberbel1400', xpDesconto: 320},
    {nome: 'lucas_roquef', xpDesconto: 1600},
    {nome: 'jairoderivia', xpDesconto: 480},
    {nome: 'pro_goncalves', xpDesconto: 1644},
    {nome: 'rafaela_contato2018', xpDesconto: 0},
    {nome: 'pokerzada12', xpDesconto: 1800},
    {nome: 'gabrieltogni', xpDesconto: 1080},
    {nome: 'gabriele_jacques', xpDesconto: 0},
    {nome: 'sthefanybarcelosantunes', xpDesconto: 360},
    {nome: 'tiago_jb_1', xpDesconto: 400},
    {nome: 'gabri8014', xpDesconto: 0},
    {nome: 'brunapedagogia15', xpDesconto: 240},
    {nome: 'joaovitor_jf42', xpDesconto: 200},
    {nome: 'rodrigorosadossantos', xpDesconto: 200},
    {nome: 'renan_vieira_88', xpDesconto: 1920},
    {nome: 'lyn_mederos', xpDesconto: 80},
    {nome: 'rafaeladeandrade1', xpDesconto: 40},
    {nome: 'wesleymeireles_meireles', xpDesconto: 1400},
    {nome: 'yanfhausmann', xpDesconto: 1320},
    {nome: 'aronfsouza', xpDesconto: 3600},
    {nome: 'jamsghl', xpDesconto: 1120},
    {nome: 'jardon_m_martins', xpDesconto: 4665},
    {nome: 'denitborges', xpDesconto: 360},
    {nome: 'maicon_gerardi', xpDesconto: 1004},
    {nome: 'flaviagoudinho39', xpDesconto: 0},
    {nome: 'FRAGAEDUARDO6', xpDesconto: 0},
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
          user.meta.experience = (parseInt(user.meta.experience) - usuario.xpDesconto) + '';
          //console.log(`{nome: '${usuario.nome}', xpDesconto: ${user.meta.experience}},`)

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
