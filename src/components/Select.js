import React from 'react'

const Select = ({label, options, name, colSize, ...props}) => {
    return (
        <div className={`${colSize ? colSize : ''} col-12 mb-3`}>
            <label htmlFor={name} className="form-label">{label}</label>
            <select className="form-select form-control" name={name} id={name} aria-label="Selecionar Especialidade" {...props}>
                <option defaultValue>{options ? "Selecione..." : "Não foi possível carregar as especialidades"}</option>
                {options && options.map(option =>  <option key={option.id} value={option.id}>{option.nome}</option>)}
            </select>
        </div>
    )
}

export default Select
