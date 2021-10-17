import { useState, useEffect } from 'react'
import { FETCH_IC } from '../api/Api';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Motivos from './Motivos'
import { Collapse } from 'bootstrap';

const Status = ({...props}) => {

    const {data, error, request} = useFetch();
    const [status, setStatus] = useState('');

    useEffect(() => {
      async function getStatus() {
        const {url} = FETCH_IC("status");
        await request("get",url);
        
      }
        
      getStatus();
    },[request])

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
          <select className="form-select form-control" name="status_id" id="status_id" aria-label="Selecionar Status" value={status} onChange={handleStatus} {...props}>
            {error && <Alert content="Não foi possível carregar as especialidades" />}
            {data && data.map(option => (  
              option.nome !== "Pendente" && <option key={option.id} value={option.id}>{option.nome}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3 collapse" id="motivo-reprovacao">
          <Motivos disabled />
        </div>
      </>
    )
}

export default Status
