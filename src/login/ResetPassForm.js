import React from 'react'
import { useHistory } from 'react-router-dom';
import { FETCH_IC } from '../api/Api';
import useFetch from '../hooks/useFetch';
import ButtonBlock from '../components/ButtonBlock';
import FloatLabelInput from '../components/FloatLabelInput';
import Alert from '../components/Alert';
import Head from '../helper/Head';
import Loading from '../components/Loading';

const ResetPassForm = () => {

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const {data, loading, error, request} = useFetch();
  const history = useHistory();

  React.useEffect(() => {
    const params =  new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  },[]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("reset-pass-form"));
    const {url, options} = FETCH_IC("reset-password",{email: login, token: key, password: formData.get('password'), password_confirmation: formData.get('password2') });
    const {response} = await request("post", url, options);
    if (response && response.ok) setTimeout(function() {
      history.push("/login");
    }, 2000)
  }

  return (
    <>
      <Head title="Redefinir senha" />
      {error ? <Alert content={error} /> : data && <Alert content={data.message} theme="success" />}
      <p className="text-center text-muted">
        Cadastre a sua nova senha
      </p>
      <form id="reset-pass-form" onSubmit={handleSubmit}>
        <FloatLabelInput type="password" name="password" label="Nova Senha" placeholder="nova senha" required minLength="8" />
        <FloatLabelInput type="password" name="password2" label="Confirmar nova senha" placeholder="confirmar nova senha" required  minLength="8" />
        {loading 
          ? <ButtonBlock disabled color="primary">Redefinindo Senha <Loading /></ButtonBlock> 
          : <ButtonBlock color="primary">Redefinir Senha</ButtonBlock>
        }
      </form>
    </>
  )
}

export default ResetPassForm
