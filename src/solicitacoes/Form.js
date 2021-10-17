import React from 'react'
import { useHistory, useParams } from 'react-router';
import { FETCH_IC } from '../api/Api';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormActions from '../components/nav/FormActions'
import NavBar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import Especialidades from './Especialidades';

const Form = () => {
    const id = useParams();
    const history = useHistory();
    const [indexLoading, setIndexLoading] = React.useState(true);
    const {loading, request} = useFetch();

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
            <NavBar navTitle="Incluir Solicitação" navActions={<FormActions action="save" loading={loading} formId="solicitacoes-form" confirm={id ? false : true} 
            indexLoading={indexLoading} />} />
            <div className="container-fluid bg-white p-3 shadow-sm">
                <form onSubmit={handleSubmit} id="solicitacoes-form" className="row">
                    <FormInput type="text" name="nome_paciente" label="Nome do paciente" required  />
                    <FormInput type="text" name="cpf_paciente" label="CPF do paciente" colSize="col-md-4" required  />
                    <FormInput type="text" name="cidade_paciente" colSize="col-md-8" label="Cidade do paciente" required  />
                    <FormInput type="text" name="uf_paciente" colSize="col-md-4" label="UF do paciente" required  />
                    <Especialidades label="Especialidade" colSize="col-md-8" name="especialidades_id" required />
                    <FormTextarea label="Descrição" name="descricao" rows="5" />
                </form>
            </div>
        </>
    )
}

export default Form
