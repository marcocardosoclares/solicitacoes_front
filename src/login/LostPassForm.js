import React from 'react'
import FloatLabelInput from '../components/FloatLabelInput'
import ButtonBlock from '../components/ButtonBlock'
import { PASSWORD_LOST } from '../api/Api';
import useForm from '../hooks/useForm';
import Head from '../helper/Head';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Loading from '../components/Loading';

const LostPassForm = () => {
  const email = useForm();
  const {data, error, loading, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = PASSWORD_LOST({email: email.value})
    await request("post",url, options);
  }

  return (
    <>
      <Head title="Solicitar nova senha" />
      {error ? <Alert content={error} /> : data && <Alert content={data.message} theme="success" />}
      <p className="text-center text-muted">
        Digite o seu e-mail
      </p>
      <form onSubmit={handleSubmit}>
        <FloatLabelInput type="email" name="email" label="E-mail" placeholder="email@exemplo.com" required {...email} />
        {loading 
          ? <ButtonBlock disabled color="primary">Enviando E-mail <Loading /></ButtonBlock> 
          : <ButtonBlock color="primary">Enviar E-mail</ButtonBlock>
        }
      </form>
    </>
  )
}

export default LostPassForm
