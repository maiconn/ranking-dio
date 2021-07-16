import {UsuarioContext} from "./UsuarioContext";
import {ReactNode, useCallback, useEffect, useReducer} from "react";
import {usuarioInitialState, usuarioReducer} from "./Reducer";
import {Usuario} from "./Interfaces";

interface ProviderProps {
  children: ReactNode;
}

export function UsuarioProvider({children}: ProviderProps) {
  const usuariosDIO = [
    'pro_goncalves',
    'aronfsouza',
    'drawklein',
    'bibianagabriela01',
    'brunapedagogia15',
    'denitborges',
    'pokerzada12',
    'gabri8014',
    'gabrieltogni',
    'gabriele_jacques',
    'casagrande_contas',
    'tiago_jb_1',
    'jairoderivia',
    'jamsghl',
    'jardon_m_martins',
    'joaovitor_jf42',
    'juroque81',
    'killianms',
    'lucas_roquef',
    'maicon_gerardi',
    'lyn_mederos',
    'rafaeladeandrade1',
    'rafaela_contato2018',
    'renan_vieira_88',
    'rodrigorosadossantos',
    'stephanymberbel1400',
    'sthefanybarcelosantunes',
    'wesleymeireles_meireles',
    'yanfhausmann'
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
    usuariosDIO.map((usuario, index) => {
      fetch(`https://app.digitalinnovation.one/api/users/${usuario}/`, configInit)
        .then(res => res.json())
        .then(res => {
          const user = res as Usuario;
          user.perfil = `https://web.digitalinnovation.one/users/${usuario}`;
          usuarios.push(user);
          usuarios.sort((obj1, obj2) => {
            if (parseInt(obj1.meta.experience) > parseInt(obj2.meta.experience)) {
              return -1;
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
