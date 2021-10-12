import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const RelatoriosActions = () => {
  const {url} = useRouteMatch();
  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li className="nav-item">
        <Link className="btn btn-default" to={`${url}/declaracao`}>Declaração</Link>
      </li>
    </ul>
  )
}

export default RelatoriosActions
