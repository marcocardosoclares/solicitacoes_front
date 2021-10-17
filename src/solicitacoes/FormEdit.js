import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { FETCH_EDIT, FETCH_RUD } from '../api/Api';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions';
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Especialidades from './Especialidades';
import Placeholder from '../components/Placeholder';
import Head from '../helper/Head';

const FormEdit = () => {
  const {id} = useParams();
  const history = useHistory();
  const {data, loading, error, request} = useFetch();
  const [indexLoading, setIndexLoading] = useState(true);
  
  useEffect(() => {
    async function edit() {
      const {url, options} = FETCH_EDIT("solicitacoes", id);
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
    const {url, options} = FETCH_RUD("solicitacoes", id, formData);
    await request("put",url, options);
    history.goBack();
  }
  
  return (
    <>
      <Head title="Solicitações - Editar" />
      <div className="container-lg vstack gap-2">
        {indexLoading && <Placeholder height="85" />}
        {error && <Alert content="Não foi possível carregar a solicitação" />}
        {data && (
          <>
            <NavBar navTitle="Alterar Solicitação" navActions={<FormActions action="save" loading={loading} formId="solicitacoes-form" pendente />} />
            <div className="container-fluid bg-white p-3 shadow-sm animeLeft">
              <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                <FormInput name="nome_paciente" label="Nome do paciente" getvalue={data.nome_paciente} required />
                <FormInput name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" getvalue={data.cpf_paciente} required />
                <FormInput name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" getvalue={data.cidade_paciente} required />
                <FormInput name="uf_paciente" colSize="col-md-4" label="UF do paciente" getvalue={data.uf_paciente} required />
                <Especialidades label="Especialidade" colSize="col-md-8" name="especialidades_id" getvalue={data.especialidades_id} getlist={data.especialidades_list} required />
                <FormTextarea label="Descrição" name="descricao" rows="5" getvalue={data.descricao} required />
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default FormEdit
