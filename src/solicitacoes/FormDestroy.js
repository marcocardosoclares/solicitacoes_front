import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { FETCH_RUD } from '../api/Api';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions';
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Placeholder from '../components/Placeholder';
import Head from '../helper/Head';

const FormDestroy = () => {
  const {id} = useParams();
  const history = useHistory();
  const {data, loading, error, request} = useFetch();
  const [indexLoading, setIndexLoading] = useState(true);

  useEffect(() => {
    async function show() {
      const {url} = FETCH_RUD("solicitacoes", id);
      await request("get", url);
      setIndexLoading(false);
    }
    show();
  },[request,id])

  async function handleSubmit(event) {
    event.preventDefault();
    const {url} = FETCH_RUD("solicitacoes", id);
    await request("delete",url);
    history.goBack();
  }
  
  return (
    <>
      <Head title="Solicitações - Excluir" />
      <div className="container-lg vstack gap-2">
        {indexLoading && <Placeholder height="85" />}
        {error && <Alert content="Não foi possível carregar a solicitação" />}
        {data && (
          <div className="vstack gap-2 animeLeft">
            <NavBar navTitle="Alterar Solicitação" navActions={<FormActions action="delete" loading={loading} formId="solicitacoes-form" pendente />} />
            <div className="container-fluid bg-white p-3 shadow-sm">
              <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                <FormInput name="nome_paciente" label="Nome do paciente" getvalue={data.nome_paciente} disabled />
                <FormInput name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" getvalue={data.cpf_paciente} disabled />
                <FormInput name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" getvalue={data.cidade_paciente} disabled />
                <FormInput name="uf_paciente" colSize="col-md-4" label="UF do paciente" getvalue={data.uf_paciente} disabled />
                <FormInput name="especialidades_id" colSize="col-md-8" label="Especialidade" getvalue={data.especialidades.nome} disabled />
                <FormTextarea label="Descrição" name="descricao" rows="5" getvalue={data.descricao} disabled />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FormDestroy
