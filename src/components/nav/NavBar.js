import React from 'react'

const NavBar = ({userName, navTitle, navActions}) => {

  return (
    <nav className="navbar navbar-light navbar-expand-md bg-white sticky-top shadow-sm animeLeft">
      <div className="container-fluid">
        <span className="navbar-brand">
          {navTitle || "Solicitações"}
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{userName}</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            {navActions}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
