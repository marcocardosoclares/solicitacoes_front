import { useContext } from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import { UserContext } from '../../context/UserContext';
import Button from '../Button'
import FormInput from '../FormInput';
import StatusFilter from './StatusFilter';

const IndexActions = ({route, handleSearch, perfil}) => {
  const {url}         = useRouteMatch();
  const history       = useHistory();
  const {userLogout}  = useContext(UserContext);

  function performSearch() {
    const nome = document.getElementById("search");
    handleSearch(nome.value,"nome")
  }

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1">
      <li className="nav-item mx-auto">
        {perfil === 1
          ? (
            <div className="hstack gap-2">
              <FormInput className="form-control" id="search" placeholder="Filtrar por nome" marginZero />
              <Button color="outline-dark" extraClass="border-0" onClick={performSearch}><i className="bi bi-search"></i></Button>
            </div>
            )
          : <StatusFilter name="search" handleSearch={handleSearch} />
        }
      </li>
      {perfil === 1 && (
        <li className="nav-item">
          <Button color="default" onClick={() => history.push(`${url}/${route}`)}>Incluir</Button>
        </li>
      )}
      <li className="nav-item ms-2">
        <Button color="default" onClick={userLogout}>Logout</Button>
      </li>
    </ul>
  )
}

export default IndexActions
