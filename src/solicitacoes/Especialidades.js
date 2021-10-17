import React from 'react'

const Especialidades = ({label, name, colSize, getvalue, getlist, ...props}) => {

    const [value, setValue] = React.useState(getvalue || '')

    function handleChange({target}) {
      setValue(target.value);
    }

    return (
      <>
        <div className={`${colSize ? colSize : ''} col-12 mb-3`}>
          <label htmlFor={name} className="form-label">{label}</label>
          <select className="form-select form-control" name={name} id={name} aria-label="Selecionar Especialidade" value={value} onChange={handleChange} {...props}>
            <option>Selecione...</option>
            {getlist && getlist.map(option =>  (<option key={option.id} value={option.id}>{option.nome}</option>
              ))
            }
          </select>
        </div>
      </>
    )
}

export default Especialidades
