import {UsuarioActions, UsuarioState} from "./Interfaces";

export const usuarioInitialState: UsuarioState = {
  usuarios: []
}

export const usuarioReducer = (
  state: UsuarioState,
  action: UsuarioActions): UsuarioState => {
  let _state = { ...state };
  switch(action.name){
    case "setListUsuario":
      return { ...state, usuarios: action.value };
    default:
      return state;
  }
}
