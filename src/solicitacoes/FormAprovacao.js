import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { FETCH_EDIT, FETCH_IC, FETCH_RUD } from '../api/Api';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions';
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Status from './Status';
import Placeholder from '../components/Placeholder'
import Head from '../helper/Head';

const FormAprovacao = () => {
  const {id} = useParams();
  const history = useHistory();
  const {loading, error, request} = useFetch();
  const [indexLoading, setIndexLoading] = useState(true);
  const [statusList, setStatusList] = useState(null);
  const [motivosList, setMotivosList] = useState(null);
  const [solicitacao, setSolicitacao] = useState(null)
  useEffect(() => {
    async function edit() {
      const statusParams = FETCH_IC("status");
      const statusResponse = await request("get",statusParams.url);
      setStatusList(statusResponse.response);
      const motivosParams = FETCH_IC("motivos_reprovacao");
      const motivosResponse = await request("get",motivosParams.url);
      setMotivosList(motivosResponse.response);
      const indexParams = FETCH_EDIT("solicitacoes", id);
      const indexResponse = await request("get",indexParams.url);
      setSolicitacao(indexResponse.response);
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
      <Head title="Solicitações - Aprovação" />
      <div className="container-lg vstack gap-2">
        {indexLoading && <Placeholder height="85" />}
        {error && <Alert content="Não foi possível carregar a solicitação" />}
        {solicitacao && (
          <>
            <NavBar navTitle="Aprovar Solicitação" navActions={<FormActions action="save" loading={loading} formId="solicitacoes-form" 
            pendente={solicitacao.status_id === 1 ? true : false} />} />
            <div className="container-fluid bg-white p-3 shadow-sm">
              <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                {statusList && motivosList && <Status statuslist={statusList} motivoslist={motivosList} statusid={solicitacao.status_id} />}
                <FormInput name="nome_paciente" label="Nome do paciente" getvalue={solicitacao.nome_paciente} disabled />
                <FormInput name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" getvalue={solicitacao.cpf_paciente} disabled />
                <FormInput name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" getvalue={solicitacao.cidade_paciente} disabled />
                <FormInput name="uf_paciente" colSize="col-md-4" label="UF do paciente" getvalue={solicitacao.uf_paciente} disabled />
                {solicitacao.especialidades && <FormInput name="especialidades_id" colSize="col-md-8" label="Especialidade" getvalue={solicitacao.especialidades.nome} disabled />}
                <FormTextarea label="Descrição" name="descricao" rows="5" getvalue={solicitacao.descricao} disabled />
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default FormAprovacao
