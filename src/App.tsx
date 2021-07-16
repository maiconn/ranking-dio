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
              {usuarios.map((item, idx) => (
                <table>
                  <tbody>
                  <td>
                    <tr>
                      <h2>{idx + 1}º</h2>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <img src={item.photo} width="70" height="80"/>
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
                  </tbody>
                </table>
              ))}
            </header>
          </div>
        )}
      </UsuarioConsumer>
    </UsuarioProvider>
  );
}

export default App;
