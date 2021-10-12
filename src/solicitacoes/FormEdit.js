import React from 'react'
import { useHistory, useParams } from 'react-router';
import { SOLICITACOES_EDIT, SOLICITACOES_STORE } from '../api/Api';
import DataLoading from '../components/DataLoading';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions';
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import useForm from '../hooks/useForm';

const FormEdit = () => {
    const {id} = useParams();
    const history = useHistory();
    const {data, loading, error, request} = useFetch();
    const nomePaciente = useForm();
    const cpfPaciente = useForm();
    const cidadePaciente = useForm();
    const ufPaciente = useForm();
    const especialidades = useForm();
    const descricao = useForm();

    React.useEffect(() => {
        async function edit() {
            const {url, options} = SOLICITACOES_EDIT(id);
            const {response} = await request("get", url, options);
            console.log(response);
        }
        edit();
    },[request,id])

    async function handleSubmit(event) {
        event.preventDefault();
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
            {loading && <DataLoading content="Buscando solicitação..." />}
            {error && <Alert content="Não foi possível carregar a solicitação" />}
            {data && (
                <>
                    <NavBar navTitle="Alterar Solicitação" navActions={<FormActions loading={loading} formId="solicitacoes-form" confirm={id ? false : true} 
                    />} />
                    <div className="container-fluid bg-white p-3 shadow-sm">
                        <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                            <FormInput type="text" name="nome_paciente" label="Nome do paciente" value={data.nome_paciente} {...nomePaciente} />
                            <FormInput type="text" name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" value={data.cpf_paciente} {...cpfPaciente}  />
                            <FormInput type="text" name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" value={data.cidade_paciente} {...cidadePaciente}  />
                            <FormInput type="text" name="uf_paciente" colSize="col-md-4" label="UF do paciente" value={data.uf_paciente} {...ufPaciente}  />
                            <FormInput type="text" name="especialidades_id" colSize="col-md-8" label="Especialidade"  value={data.especialidades.nome} {...especialidades} />
                            <FormTextarea label="Descrição" name="descricao" rows="5" value={data.descricao} {...descricao} />
                        </form>
                    </div>
                </>
            )}
        </>
    )
}

export default FormEdit
