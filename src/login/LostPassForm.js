import React from 'react'
import FloatLabelInput from '../components/FloatLabelInput'
import ButtonBlock from '../components/ButtonBlock'
import { FETCH_IC } from '../api/Api';
import Head from '../helper/Head';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Loading from '../components/Loading';

const LostPassForm = () => {
  const {data, error, loading, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("lost-pass-form"));
    const {url, options} = FETCH_IC("forgot-password",formData);
    await request("post",url, options);
  }

  return (
    <>
      <Head title="Solicitar nova senha" />
      {error ? <Alert content={error} /> : data && <Alert content={data.message} theme="success" />}
      <p className="text-center text-muted">
        Digite o seu e-mail
      </p>
      <form id="lost-pass-form" onSubmit={handleSubmit}>
        <FloatLabelInput type="email" name="email" label="E-mail" placeholder="email@exemplo.com" required />
        {loading 
          ? <ButtonBlock disabled color="primary">Enviando E-mail <Loading /></ButtonBlock> 
          : <ButtonBlock color="primary">Enviar E-mail</ButtonBlock>
        }
      </form>
    </>
  )
}

export default LostPassForm
