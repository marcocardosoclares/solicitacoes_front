import { useState } from 'react'
import Motivos from './Motivos'
import { Collapse } from 'bootstrap';

const Status = ({statuslist, motivoslist, statusid}) => {

    const [status, setStatus] = useState('');
    let required = false;
    let disabled = false;
    if (statusid === 1) required = true;
    else disabled = true;

    function handleStatus({target}) {
      
      setStatus(target.value);
      const motivos = document.getElementById("motivos_id");
      const bsCollapse = new Collapse(document.getElementById("motivo-reprovacao"),{toggle:false});
      if (target.value === "3") {
        bsCollapse.show();
        motivos.required = true;
        motivos.disabled = false;
      } else {
        bsCollapse.hide();
        motivos.required = false;
        motivos.disabled = true;
      }
    }

    return (
      <>
        <div className="col-md-6 mb-3">
          <label htmlFor="status_id" className="form-label">Selecionar status</label>
          <select className="form-select form-control" name="status_id" id="status_id" aria-label="Selecionar Status" value={status} 
            onChange={handleStatus} required={required} disabled={disabled}>
            {statuslist && statuslist.map(option => (  
              option.nome !== "Pendente" && <option key={option.id} value={option.id}>{option.nome}</option>
            ))}
          </select>
        </div>
        <div className={`col-md-6 mb-3 ${statusid !== 3 && "collapse"}`} id="motivo-reprovacao">
          <Motivos motivoslist={motivoslist} disabled />
        </div>
      </>
    )
}

export default Status
