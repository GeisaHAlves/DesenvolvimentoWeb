import { createContext, useState } from "react";

export const TemaContext = createContext();
export const TemaProvider = ({children}) => {
  const [temaSelecionado, setTemaSelecionado] = useState(
    "claro" // informa o valor inicial do estado
  );

  return (
    <TemaContext.Provider
      value={{
        temaSelecionado,
        setTemaSelecionado,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
};

export const UsuarioContext = createContext();
export const UsuarioProvider = ({children}) => {
  const [usuario, setUsuario] = useState(
    localStorage.getItem('usuarioLogado')
  );

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const AlunoContext = createContext();
export const AlunoProvider = ({children}) => {
  const [aluno, setAluno] = useState(
    localStorage.getItem('aluno')
  );

  return (
    <AlunoContext.Provider
      value={{
        aluno,
        setAluno,
      }}
    >
      {children}
    </AlunoContext.Provider>
  );
};

export const MateriaContext = createContext();
export const MateriaProvider = ({children}) => {
  const [materia, setMateria] = useState(
    localStorage.getItem('materia')
  );

  return (
    <MateriaContext.Provider
      value={{
        materia,
        setMateria,
      }}
    >
      {children}
    </MateriaContext.Provider>
  );
};