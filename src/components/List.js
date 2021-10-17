import React from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const List = ({list, perfil}) => {
  const {url} = useRouteMatch();

  return (
    <div className="vstack gap-1 animeLeft">
      <div className="px-2 py-2 bg-primary bg-opacity-10 fw-bold shadow-sm border">
        <div className="row">
          <div className="col-md-2">Status</div>
          <div className="col-md-4">Nome</div>
          <div className="col-md-4">Especialidade</div>
          <div className="col-md-2">Ações</div>
        </div>
      </div>
      {list.map(row => (
        <div className="list-group rounded-0" key={row.id}>
          <div className="list-group-item list-group-item-action px-2 py-0 shadow-sm small" id={row.id} key={row.id}>
            <div className="row">
              <div className="col-md-2 align-self-center">
                {row.status.nome}
              </div>
              <div className="col-md-4 align-self-center">
                {row.nome_paciente}
              </div>
              
              <div className="col-md-4 align-self-center">
                {row.especialidades.nome}
              </div>
              <div className="col-md-2">
                <div className="hstack gap-2">
                  {perfil === 1 
                    ? <>
                        <Link to={`${url}/${row.id}/editar`} className="btn btn-outline-secondary border-0"><i className="bi bi-pencil"></i></Link>
                        <Link to={`${url}/${row.id}/excluir`} className="btn btn-outline-danger border-0"><i className="bi bi-x"></i></Link>
                      </>
                    : <Link to={`${url}/${row.id}/aprovacao`} className="btn btn-outline-secondary border-0"><i className="bi bi-search"></i></Link>
                  }
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
