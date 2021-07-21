import React from 'react';
import './App.css';
import {UsuarioProvider} from "./usuario/UsuarioProvider";
import {UsuarioConsumer} from "./usuario/UsuarioConsumer";

function App() {
  return (
    <UsuarioProvider>
      <UsuarioConsumer>
        {({usuarios}) => (
          <div className="App">
            <header className="App-header">
              <h1>Ranking DIO</h1>
              <table>
                <tbody>
                {usuarios.map((item, idx) => (
                  <div>
                    <td>
                      <tr>
                        <h2>{("0" + (idx + 1)).slice(-2)}º</h2>
                      </tr>
                    </td>
                    <td>
                      <tr>
                        {item.photo ? (<img src={item.photo}/>) : (<img
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQGtRgpdb44oxg/company-logo_200_200/0?e=2159024400&v=beta&t=003zGHhfxuw6MdN6us3ZmimFn2uUSf0KrUWzr3ya5sA"/>)}
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <a href={item.perfil} target="_blank">{item.name}</a>
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <h3>{item.meta.experience} XP</h3>
                      </tr>
                    </td>
                  </div>
                ))}
                </tbody>
              </table>
            </header>
          </div>
        )}
      </UsuarioConsumer>
    </UsuarioProvider>
  );
}

export default App;
