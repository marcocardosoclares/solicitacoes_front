import {useState } from 'react'

const StatusFilter = ({name, colSize, handleSearch, statuslist, ...props}) => {

  const [status, setStatus] = useState("all")

  function handleStatus({target}) {
    setStatus(target.value);
    handleSearch(target.value,"status");
  }

  return (
    <>
      {statuslist && (
        <select className="form-select form-control form-control-sm" name={name} id={name} aria-label="Filtrar por status" value={status} onChange={handleStatus} {...props}>
          <option value="all">Todos</option>
          {statuslist.map(option =>  (<option key={option.id} value={option.id}>{option.nome}</option>))}
        </select>
      )}
    </>
  )
}

export default StatusFilter
