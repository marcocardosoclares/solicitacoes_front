import {useState} from 'react'

const StatusFilter = ({motivoslist, ...props}) => {

  const [motivo, setMotivo] = useState('')

  function handleChange({target}) {
    setMotivo(target.value);
  }

  return (
    <>
      <label htmlFor="motivos_id" className="form-label text-danger">Por favor, selecione o motivo da reprovação</label>
      <select className="form-select form-control shadow-sm" name="motivos_reprovacao_id" id="motivos_id" aria-label="Selecione o motivo" value={motivo} onChange={handleChange} {...props}>
        {motivoslist.map(option =>  (
          option.id === 3
          ? <option key={option.id} value={option.id} data-bs-toggle="collapse" data-bs-target="motivo-reprovacao">{option.nome}</option>
          : <option key={option.id} value={option.id}>{option.nome}</option>
          ))
        }
      </select>
    </>
  )
}

export default StatusFilter
