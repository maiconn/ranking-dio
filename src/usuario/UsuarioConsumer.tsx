import {UsuarioContextValue} from "./Interfaces";
import {ReactNode} from "react";
import {UsuarioContext} from './UsuarioContext';

interface ConsumerProps {
  children: (value: UsuarioContextValue) => ReactNode;
}

export function UsuarioConsumer({children}: ConsumerProps) {
  return <UsuarioContext.Consumer>{children}</UsuarioContext.Consumer>;
}
