import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Form from './Form';
import FormEdit from './FormEdit';
import FormDestroy from './FormDestroy';
import FormAprovacao from './FormAprovacao';
import Index from './Index';

const Solicitacoes = () => {

  const {path} = useRouteMatch();
  return (
    <div className="container-lg vstack gap-2">
      <Switch>
        <Route path={`${path}/:id/excluir`}><FormDestroy /></Route>
        <Route path={`${path}/:id/aprovacao`}><FormAprovacao /></Route>
        <Route path={`${path}/:id/editar`}><FormEdit /></Route>
        <Route path={`${path}/incluir`}><Form /></Route>
        <Route path={path}><Index /></Route>
      </Switch>
    </div>
  )
}

export default Solicitacoes
