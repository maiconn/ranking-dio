import {createContext} from "react";
import {Usuario, UsuarioContextValue} from "./Interfaces";

export const UsuarioContext = createContext<UsuarioContextValue>({
  usuarios: [],
});
