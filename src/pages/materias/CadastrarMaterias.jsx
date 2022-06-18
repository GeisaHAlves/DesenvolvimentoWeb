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
  const [professor_nome, setprofessor_nome] = useState(valorInicial);
 
  useEffect(()=> {
    getMaterias()
  }, []);

  const getMaterias = () => {
    api.get("/materias").then((response) => {
      response.data.forEach(materia => {
        if (materia.id == id) {
          setTitulo(materia.titulo);
          setprofessor_nome(materia.professor_nome);
                 }
      })
    });
  };

  const cadastrarMaterias = () => {
    if (id) {
      api.put("/materias", {
        id,
        titulo,
        professor_nome,
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
          professor_nome         
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
    setprofessor_nome("");
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
        value={professor_nome}
        onChange={(e) => setprofessor_nome(e.target.value)}
        />
    
      <Styles.ButtonCadastro onClick={cadastrarMaterias}>
        {id ? 'Editar' : 'Cadastrar'}
      </Styles.ButtonCadastro>
    </Styles.Form>
  );
};

export default CadastrarMaterias;
