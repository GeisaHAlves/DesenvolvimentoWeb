import { useRoutes } from "react-router-dom";
import MateriasListagem from '../pages/materias/MateriasListagem';
import AlunosListagem from '../pages/alunos/AlunosListagem';
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import CadastrarMaterias from "../pages/materias/CadastrarMaterias";
import Container from '@mui/material/Container';
import { useContext } from "react";
import { TemaContext } from "../context";
import tema from "../tema";
import Login from "../pages/Login";

const Routes = () => {
  const routes = useRoutes([
    { path: "/listar-alunos", element: <AlunosListagem /> },
    { path: "/listar-materias", element: <MateriasListagem /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
    { path: "/cadastrar-materias", element: <CadastrarMaterias /> },
    { path: "/editar-materias/:id", element: <CadastrarMaterias /> },
    { path: "/login", element: <Login /> }
  ]);

  return routes;
};

const App = () => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  // tema.claro ou tema["claro"] fazem a mesma coisa
  return (
    <Container maxWidth="md" sx={tema[temaSelecionado]}>
      <Routes />
    </Container>
  );
};

export default App;
