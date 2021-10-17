import { useContext, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import { UserContext } from '../../context/UserContext';
import Button from '../Button'
import FormInput from '../FormInput';
import Loading from '../Loading';
import StatusFilter from './StatusFilter';

const IndexActions = ({route, handleSearch, perfil, statuslist}) => {
  const {url}         = useRouteMatch();
  const history       = useHistory();
  const {userLogout}  = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  function performSearch(event) {
    event.preventDefault();
    const nome = document.getElementById("search");
    handleSearch(nome.value,"nome");
  }

  function animeLogout() {
    setLoading(true);
    userLogout();
  }

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1">
      <li className="nav-item mx-md-auto">
        {perfil === 1
          ? (
            <form onSubmit={performSearch} className="d-flex">
              <FormInput id="search" placeholder="Filtrar por nome" marginZero />
              <Button type="submit" color="outline-dark" extraClass="border-0 ms-2"><i className="bi bi-search"></i></Button>
            </form>
            )
          : <StatusFilter name="search" statuslist={statuslist} handleSearch={handleSearch} />
        }
      </li>
      {perfil === 1 && (
        <li className="nav-item">
          <Button color="default" onClick={() => history.push(`${url}/${route}`)}>Incluir</Button>
        </li>
      )}
      <li className="nav-item ms-2">
        {loading
          ? <Button disabled color="default" onClick={animeLogout}><Loading content="Saindo... " /></Button>
          : <Button color="default" onClick={animeLogout}>Logout</Button>
        }
      </li>
    </ul>
  )
}

export default IndexActions
