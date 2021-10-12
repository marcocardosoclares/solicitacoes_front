import React from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../components/Button'

const List = ({list}) => {
  const {url} = useRouteMatch();

  return (
    <div className="vstack gap-1 animeLeft">
      <div className="p-3 bg-primary bg-opacity-10 fw-bold shadow-sm border">
        <div className="row">
          <div className="col-md-4 col">Nome</div>
          <div className="col-md-2 col">CPF</div>
          <div className="col-md-4 col">Especialidade</div>
          <div className="col-md-2 col">Ações</div>
        </div>
      </div>
      {list.map(row => (
        <div className="list-group rounded-0" key={row.id}>
          <div className="list-group-item list-group-item-action px-3 py-2 shadow-sm small" id={row.id} key={row.id}>
            <div className="row">
              <div className="col-md-4 col align-self-center">
                {row.nome_paciente}
              </div>
              <div className="col-md-2 col align-self-center">
                {row.cpf_paciente}
              </div>
              <div className="col-md-4 col align-self-center">
                {row.especialidades.nome}
              </div>
              <div className="col-md-2 col">
                <div className="hstack gap-2">
                  <Link to={`${url}/editar/${row.id}`} className="btn btn-outline-secondary border-0"><i className="bi bi-pencil"></i></Link>
                  <Button color="outline-danger" extraClass="border-0"><i className="bi bi-x"></i></Button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
