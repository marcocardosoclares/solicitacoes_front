import React from 'react'
import { Offcanvas } from 'bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Button from '../Button'

const OffCanvas = ({url, userName, userLogout}) => {
  
  React.useEffect(()=> {
    const bsOffcanvas = new Offcanvas(document.getElementById("menuPrincipal"));
    const navItens = document.querySelectorAll("#menuPrincipal .nav-item");
    navItens.forEach(navItem => {
      navItem.addEventListener('click',handleClick);
    });
    
    function handleClick({target}) {
      bsOffcanvas.hide();
      if(target.hasAttribute("href")) return <Redirect to={target.href} />;
    }

    return () => {
      navItens.forEach(navItem => {
        navItem.removeEventListener('click',handleClick);
      });
    };
  },[]);
  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="menuPrincipal" aria-labelledby="menuPrincipalLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="menuPrincipalLabel">{userName}</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="btn btn-default" to={`${url}/questionarios`}>Questionários respondidos</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-default" to={`${url}/relatorios`}>Relatórios</Link>
          </li>
          <li className="nav-item">
            <Button color="default" onClick={userLogout}>Logout</Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OffCanvas
