import {UsuarioActions, UsuarioState} from "./Interfaces";

export const usuarioInitialState: UsuarioState = {
  usuarios: []
}

export const usuarioReducer = (
  state: UsuarioState,
  action: UsuarioActions): UsuarioState => {
  switch(action.name){
    case "setListUsuario":
      return { ...state, usuarios: action.value };
    default:
      return state;
  }
}
