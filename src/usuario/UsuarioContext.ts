import {createContext} from "react";
import {UsuarioContextValue} from "./Interfaces";

export const UsuarioContext = createContext<UsuarioContextValue>({
  usuarios: [],
});
