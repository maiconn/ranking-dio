export interface Usuario {
  name: string;
  photo: string;
  meta: {
    level: string;
    experience_to_next: string;
    experience: string;
  },
  perfil: string;
}
interface ActionSetListUsuario {
  name: 'setListUsuario';
  value: Array<Usuario>;
}

export type UsuarioActions = ActionSetListUsuario;

//CONTEXT / STATE
export interface UsuarioContextValue {
  usuarios: Array<Usuario>;
}

export interface UsuarioState {
  usuarios: Array<Usuario>;
}
