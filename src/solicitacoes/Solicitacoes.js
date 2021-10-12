import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Form from './Form';
import FormEdit from './FormEdit';
import Index from './Index';

const Solicitacoes = () => {

  const {path} = useRouteMatch();
  return (
    <div className="container-lg vstack gap-2">
      <Switch>
        <Route path={`${path}/editar/:id`}><FormEdit /></Route>
        <Route path={`${path}/incluir`}><Form /></Route>
        <Route path={path}><Index /></Route>
      </Switch>
    </div>
  )
}

export default Solicitacoes
