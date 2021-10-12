import React from 'react'
import ButtonBlock from '../components/ButtonBlock'
import FloatLabelInput from '../components/FloatLabelInput'
import { UserContext } from '../context/UserContext'
import useForm from '../hooks/useForm'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const LoginForm = ({path}) => {
  const email = useForm();
  const password = useForm();
  const {userLogin, error, loading} = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(email.value, password.value);
  }
  return (
    <>
      {error && <Alert content={error} />}
      <p className="text-center text-muted">
        Faça o seu login
      </p>
      <form onSubmit={handleSubmit}>
        <FloatLabelInput type="email" name="email" label="E-mail" placeholder="email@exemplo.com" {...email}  />
        <FloatLabelInput type="password" name="password" label="Senha" placeholder="Insira sua senha" {...password}  />
        {loading 
          ? <ButtonBlock color="primary" disabled>Acessando... <Loading /></ButtonBlock> 
          : <ButtonBlock color="primary">Acessar</ButtonBlock>
        }
      </form>
      <div className="mt-3">
        <Link to={`${path}/esqueci`} className="text-decoration-none text-danger">Esqueci minha senha</Link>
      </div>
    </>
  )
}

export default LoginForm
