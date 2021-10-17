import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { FETCH_EDIT, FETCH_RUD } from '../api/Api';
import DataLoading from '../components/DataLoading';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions';
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Status from './Status';
import Especialidades from './Especialidades';

const FormAprovacao = ({url}) => {
  const {id} = useParams();
  const history = useHistory();
  const {data, loading, error, request} = useFetch(true);
  const [indexLoading, setIndexLoading] = useState(true);
  
  useEffect(() => {
    async function edit() {
      const {url, options} = FETCH_EDIT("solicitacoes",id);
      await request("get", url, options);
      setIndexLoading(false);
    }
    edit();
  },[request,id])

  async function handleSubmit(event) {
    event.preventDefault();
    const solicitacoesForm = document.getElementById("solicitacoes-form")
    const formData = {};
    new FormData(solicitacoesForm).forEach((fieldValue,field) => formData[field] = fieldValue);
    const {url, options} = FETCH_RUD("solicitacoes",id,formData);
    await request("put",url, options);
    history.goBack();
  }
  
  return (
    <>
      {indexLoading && <DataLoading content="Buscando solicitação..." />}
      {error && <Alert content="Não foi possível carregar a solicitação" />}
      {data && (
        <>
          <NavBar navTitle="Aprovar Solicitação" navActions={<FormActions action="save" loading={loading} formId="solicitacoes-form" />} />
          <div className="container-fluid bg-white p-3 shadow-sm">
            <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
              <Status required />
              <FormInput name="nome_paciente" label="Nome do paciente" getvalue={data.nome_paciente} disabled />
              <FormInput name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" getvalue={data.cpf_paciente} disabled />
              <FormInput name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" getvalue={data.cidade_paciente} disabled />
              <FormInput name="uf_paciente" colSize="col-md-4" label="UF do paciente" getvalue={data.uf_paciente} disabled />
              <Especialidades label="Especialidade" colSize="col-md-8" name="especialidades_id" getvalue={data.especialidades_id} disabled />
              <FormTextarea label="Descrição" name="descricao" rows="5" getvalue={data.descricao} disabled />
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default FormAprovacao
