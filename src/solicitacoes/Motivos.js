import {useState, useEffect} from 'react'
import { FETCH_IC } from '../api/Api';
import useFetch from '../hooks/useFetch';
import DataLoading from '../components/DataLoading';
import Alert from '../components/Alert'

const StatusFilter = ({...props}) => {

  const {data, loading, error, request} = useFetch();
  const [motivo, setMotivo] = useState('')

  useEffect(() => {
    async function getMotivos() {
      const {url} = FETCH_IC("motivos_reprovacao");
      await request("get",url);
    }
      
    getMotivos();
  },[request])

  function handleChange({target}) {
    setMotivo(target.value);
  }

  return (
    <>
      <div>
        {loading && <DataLoading content="Carregando motivos..." />}
        {error && <Alert content="Não foi possível carregar os status" />}
        {data && (
          <>
            <label htmlFor="motivos_id" className="form-label text-danger">Por favor, selecione o motivo da reprovação</label>
            <select className="form-select form-control shadow-sm" name="motivos_reprovacao_id" id="motivos_id" aria-label="Selecione o motivo" value={motivo} onChange={handleChange} {...props}>
              {data.map(option =>  (
                option.id === 3
                ? <option key={option.id} value={option.id} data-bs-toggle="collapse" data-bs-target="motivo-reprovacao">{option.nome}</option>
                : <option key={option.id} value={option.id}>{option.nome}</option>
                ))
              }
            </select>
          </>
        )}
      </div>
    </>
  )
}

export default StatusFilter
