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
              <h1> <img src={process.env.PUBLIC_URL + '/jornada-tech-e3e3e3.png'} alt="image" style={{
                width: 250
              }}/></h1>
              <p>Premiação <b>05/11</b> - Pix Maroto! <br/>(Sua escolha)
                  <ul>
                    <li>1º lugar - R$50</li>
                    <li>2º lugar - R$30</li>
                    <li>3º lugar - R$20</li>
                  </ul>
                </p>
              <table>
                <tbody>
                {usuarios.map((item, idx) => (
                  <div>
                    <td>
                      <tr>
                        <h3>{("0" + (idx + 1)).slice(-2)}º</h3>
                      </tr>
                    </td>
                    <td>
                      <tr>
                        {item.photo ? (<img className="perfil" src={item.photo}/>) : (<img className="perfil"
                                                                                           src="https://media-exp1.licdn.com/dms/image/C4E0BAQGtRgpdb44oxg/company-logo_200_200/0?e=2159024400&v=beta&t=003zGHhfxuw6MdN6us3ZmimFn2uUSf0KrUWzr3ya5sA"/>)}
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <a href={item.perfil} target="_blank"><b>{item.name}</b></a>
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <h2>{item.meta.experience}XP</h2>
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
