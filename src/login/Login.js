import React from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import LoginForm from './LoginForm'
import ResetPassForm from './ResetPassForm'
import LostPassForm from './LostPassForm'
import { UserContext } from '../context/UserContext'
import Head from '../helper/Head'

const Login = () => {
  const {path} = useRouteMatch()
  const {login} = React.useContext(UserContext);
  if (login === true) {
    return <Redirect to="/solicitacoes" />
  }

  return (
    <>
      <Head title="Login" />
      <div className="container-fluid row min-vh-100 animeLeft">
        <div className="vstack align-items-center justify-content-center">
          <div className="col-md-6 col-lg-4 col-10 bg-white shadow-sm p-4 rounded-3 border">
            <h4 className="mb-4">Solicitações de Encaminhamento</h4>
            <div className="text-center">
            </div>
            <Switch>
              <Route path={`${path}/esqueci`}><LostPassForm /></Route>
              <Route path={`${path}/reset`}><ResetPassForm /></Route>
              <Route path={path}><LoginForm path={path} /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
