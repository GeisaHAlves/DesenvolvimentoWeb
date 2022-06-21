import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import DefaultPage from "./components/DefaultPage";
import { TemaProvider, UsuarioProvider, AlunosProvider, MateriasProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <UsuarioProvider>
      <TemaProvider>
        <AlunosProvider>
          <MateriasProvider>
          {/* 
          DefaultPage
          É só uma div, que pega o tema, pra incluir no fundo da página
        */}
          <DefaultPage>
            <BrowserRouter>
              {/* 
              Navbar => possui o botão de escolha do tema
            */}
              <Navbar />
              <App />
            </BrowserRouter>
          </DefaultPage>
          </MateriasProvider>
        </AlunosProvider>
      </TemaProvider>
    </UsuarioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
