import React from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AdminList = ({list}) => {
  const {url} = useRouteMatch();
  const {user} = React.useContext(UserContext);

  return (
    <div className="vstack gap-1 animeLeft">
      <div className="p-3 bg-primary bg-opacity-10 fw-bold shadow-sm border">
        <div className="row">
          <div className="col-md-1 col">#</div><div className="col-md-3 col">Nome</div>
          <div className="col-md-4 col">Funcionário</div><div className="col-md-2 col">Empresa</div>
          <div className="col-md-2 col">Data</div>
        </div>
      </div>
      {list.map(row => (
        <div className="list-group rounded-0" key={row.id}>
          <Link to={`${url}/visualizar/${row.id}`} 
          className="list-group-item list-group-item-action p-3 shadow-sm small" 
          data-questionarioid={row.questionario.id} data-row id={row.id} key={row.id}>
            <div className="row">
              <div className="col-md-1 col align-self-center">
                {row.id}
              </div>
              <div className="col-md-3 col align-self-center">
                {row.questionario.nome}
              </div>
              <div className="col-md-4 col align-self-center">
                {user.name}
              </div>
              <div className="col-md-2 col align-self-center">
                {`${user.unidades.clientes.codigo_cliente} / ${user.unidades.codigo_unidade}`}
              </div>
              <div className="col-md-2 col align-self-center">
                {new Date(row.created_at).toLocaleDateString()}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AdminList
