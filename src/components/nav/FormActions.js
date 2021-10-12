import React from 'react'
import { useHistory } from 'react-router';
import Loading from '../Loading';

const FormActions = ({loading, formId}) => {
  const history = useHistory();
  const defaultAttributes = { type:"submit", className:"btn btn-outline-primary border-0", form:formId};
  
  return (
    <>
      <ul className="nav navbar-nav justify-content-end flex-grow-1" id="pills-tab" role="tablist">
        <li className="nav-item ms-lg-5 mt-5 mt-lg-0" role="presentation">
          <div className="btn-group" role="group" aria-label="Confirm group">
            { loading
              ? <button disabled {...defaultAttributes} >Gravando respostas... <Loading /></button>
              : <button {...defaultAttributes} >Confirmar</button>
            }
            <button type="button" className="btn btn-outline-dark border-0" onClick={() => history.push("/app/solicitacoes")}>Fechar</button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default FormActions
