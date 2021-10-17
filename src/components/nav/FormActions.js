import React from 'react'
import { useHistory } from 'react-router';
import Loading from '../Loading';

const FormActions = ({loading, formId, action}) => {
  const history = useHistory();
  const defaultAttributes = { type:"submit", className:`btn btn-outline-${action === "delete" ? "danger" : "primary"} border-0`, form:formId};
  const children = {
    "delete" : {"loading": "Excluindo...","default":"Excluir"},
    "save" : {"loading": "Salvando dados...","default":"Confirmar"}
  }
  
  return (
    <ul className="nav navbar-nav justify-content-end flex-grow-1" id="pills-tab" role="tablist">
      <li className="nav-item ms-lg-5 mt-5 mt-lg-0" role="presentation">
        <div className="btn-group" role="group" aria-label="Confirm group">
          { loading
            ? <button disabled {...defaultAttributes} >{children[action].loading} <Loading /></button>
            : <button {...defaultAttributes} >{children[action].default}</button>
          }
          <button type="button" className="btn btn-outline-dark border-0" onClick={() => history.push("/app/solicitacoes")}>Fechar</button>
        </div>
      </li>
    </ul>
  )
}

export default FormActions
