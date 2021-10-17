import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { FETCH_IC } from '../api/Api';
import FormInput from '../components/FormInput';
import Alert from '../components/Alert';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions'
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Especialidades from './Especialidades';
import Placeholder from '../components/Placeholder'
import Head from '../helper/Head';

const Form = () => {
  const history = useHistory();
  const [indexLoading, setIndexLoading] = useState(true);
  const {loading, error, request} = useFetch();
  const [especialidades, setEspecialidades] = useState(null)

  useEffect(() => {
    async function getEspecialidades() {
      const {url} = FETCH_IC("especialidades")
      const {response} = await request("get",url);
      setEspecialidades(response);
      setIndexLoading(false);
    }
    getEspecialidades();
  }, [request])

  async function handleSubmit(event) {
    event.preventDefault();
    setIndexLoading(false);
    const solicitacoesForm = document.getElementById("solicitacoes-form")
    const formData = new FormData(solicitacoesForm);
    formData.append('status_id',1);
    const {url, options} = FETCH_IC("solicitacoes", formData);
    await request("post",url, options);
    history.goBack();
  }
  
  return (
    <>
      <Head title="Solicitações - Incluir" />
      <div className="container-lg vstack gap-2">
        {error && <Alert content="Não foi possível caregar o formulário..." />}
        {indexLoading ? <Placeholder height="85"/> :
          <>
            <NavBar navTitle="Incluir Solicitação" navActions={<FormActions action="save" loading={loading} formId="solicitacoes-form" pendente />}/>
            <div className="bg-white p-3 shadow-sm">
              <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                <FormInput type="text" name="nome_paciente" label="Nome do paciente" required  />
                <FormInput type="text" name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" required  />
                <FormInput type="text" name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" required  />
                <FormInput type="text" name="uf_paciente" colSize="col-md-4" label="UF do paciente" required  />
                {especialidades && <Especialidades label="Especialidade" colSize="col-md-8" name="especialidades_id" getlist={especialidades} required />}
                <FormTextarea label="Descrição" name="descricao" rows="5" />
              </form>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Form
