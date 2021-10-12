import React from 'react'
import { useHistory, useParams } from 'react-router';
import { ESPECIALIDADES, SOLICITACOES_STORE } from '../api/Api';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions'
import NavBar from '../components/nav/NavBar';
import Select from '../components/Select';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';

const Form = () => {
    const id = useParams();
    const history = useHistory();
    const [indexLoading, setIndexLoading] = React.useState(true);
    const {loading, request} = useFetch();
    const [options, setOptions] = React.useState(null);
    const nomePaciente = useForm();
    const cpfPaciente = useForm();
    const cidadePaciente = useForm();
    const ufPaciente = useForm();

    React.useEffect(() => {
        async function especialidades() {
            const {url} = ESPECIALIDADES();
            const {response} =  await request("get",url);
            if (response) setOptions(response);
        }
        async function edit() {
            const {url} = ESPECIALIDADES();
            const {response} =  await request("get",url);
            if (response) setOptions(response);
        }
        if (id) edit() 
        else especialidades();
    },[request,id])

    async function handleSubmit(event) {
        event.preventDefault();
        setIndexLoading(false);
        const solicitacoesForm = document.getElementById("solicitacoes-form")
        const formData = new FormData(solicitacoesForm);
        console.log(formData);
        const {url, options} = SOLICITACOES_STORE(formData);
        const {response} = await request("post",url, options);
        console.log(response);
        history.goBack();
    }
    
    return (
        <>
            <NavBar navTitle="Incluir Solicitação" navActions={<FormActions loading={loading} formId="solicitacoes-form" confirm={id ? false : true} 
            indexLoading={indexLoading} />} />
            <div className="container-fluid bg-white p-3 shadow-sm">
                <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                    <FormInput type="text" name="nome_paciente" label="Nome do paciente" {...nomePaciente} required  />
                    <FormInput type="text" name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" {...cpfPaciente} required  />
                    <FormInput type="text" name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" {...cidadePaciente} required  />
                    <FormInput type="text" name="uf_paciente" colSize="col-md-4" label="UF do paciente" {...ufPaciente} required  />
                    <Select label="Especialidade" colSize="col-md-8" options={options} name="especialidades_id" required />
                    <FormTextarea label="Descrição" name="descricao" rows="5" />
                </form>
            </div>
        </>
    )
}

export default Form
