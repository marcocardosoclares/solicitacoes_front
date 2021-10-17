import {useState, useEffect} from 'react'
import { FETCH_IC } from '../../api/Api';
import useFetch from '../../hooks/useFetch';
import Alert from '../Alert'
import Loading from '../Loading';

const StatusFilter = ({name, colSize, handleSearch, defaultValue, ...props}) => {

  const {loading,data, error, request} = useFetch();
  const [status, setStatus] = useState('')

  useEffect(() => {
    async function getAprovacao() {
      const {url} = FETCH_IC("status");
      await request("get",url);
    }
      
    getAprovacao();
  },[request])

  function handleStatus({target}) {
    setStatus(target.value);
    handleSearch(target.value,"status");
  }

  return (
    <>
    {loading && <Loading type="muted" />}
    {error && <Alert content="Não foi possível carregar a lista de status" />}
    {data && (
      <select className="form-select form-control form-control-sm" name={name} id={name} aria-label="Filtrar por status" value={status} onChange={handleStatus} {...props}>
        <option value="all">Todos</option>
        {data.map(option =>  (<option key={option.id} value={option.id}>{option.nome}</option>))}
      </select>
    )}
    </>
  )
}

export default StatusFilter
