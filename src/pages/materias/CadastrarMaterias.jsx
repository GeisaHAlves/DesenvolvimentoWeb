import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "../../components/Styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";
import api from "../../services/Api";

const CadastrarMaterias = () => {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);

  const valorInicial = id ? "" : null;
  const [titulo, setTitulo] = useState(valorInicial);
  const [professorNome, setprofessorNome] = useState(valorInicial);
 
  useEffect(()=> {
    getMaterias()
  }, []);

  const getMaterias = () => {
    api.get("/materias").then((response) => {
      response.data.forEach(materia => {
        if (materia.id == id) {
          setTitulo(materia.titulo);
          setprofessorNome(materia.professorNome);
                 }
      })
    });
  };

  const cadastrarMaterias = () => {
    if (id) {
      api.put("/materias", {
        id,
        titulo,
        professorNome,
            }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          MySwal.fire(<p>{response?.data?.message}</p>);
          limparCampos();
        }
      }).catch(error => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      });
    } else {
      api.post("/materias", {
          titulo,
          professorNome         
        })
        .then((response) => {
          if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        }).catch(error => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
        });
    }
  };

  const limparCampos = () => {
    setTitulo("");
    setprofessorNome("");
    };

  return (
    <Styles.Form>
      <Styles.InputCadastro
        label="Titulo"
        variant="outlined"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <Styles.InputCadastro
        label="Professor"
        variant="outlined"
        value={professorNome}
        onChange={(e) => setprofessorNome(e.target.value)}
        />
    
      <Styles.ButtonCadastro onClick={cadastrarMaterias}>
        {id ? 'Editar' : 'Cadastrar'}
      </Styles.ButtonCadastro>
    </Styles.Form>
  );
};

export default CadastrarMaterias;
