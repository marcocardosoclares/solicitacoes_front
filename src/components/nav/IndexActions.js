import React from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import useForm from '../../hooks/useForm';
import Button from '../Button'
import FormInput from '../FormInput';

const IndexActions = ({route, handleSearch}) => {
  const {url} = useRouteMatch();
  const search = useForm();
  const history = useHistory()

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li className="nav-item me-5">
        <Button color="default" onClick={() => history.push(`${url}/${route}`)}>Incluir</Button>
      </li>
      <li className="nav-item me-2">
        <FormInput type="text" className="form-control" name="search" placeholder="Filtrar por nome" marginZero {...search} />
      </li>
      <li className="nav-item">
        <Button color="outline-dark" extraClass="border-0" onClick={() => handleSearch(search.value)}><i className="bi bi-search"></i></Button>
      </li>
    </ul>
  )
}

export default IndexActions
