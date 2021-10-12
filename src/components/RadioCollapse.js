import React from 'react'

const RadioCollapse = ({name,id,label, subQuestao, subQuestoes, resposta, ...props}) => {
  const checked = +resposta === props.value ? true : false;
  const toggleType = +subQuestao  ? ":not(.show)" : ".show";
  const defaultAttributes = {"className":"form-check-input", "type":"radio", name, id, 
  "data-bs-toggle":"collapse", "data-bs-target":`#sub_questao${name}${toggleType}`, "data-toggle-type":subQuestao, 
  "onClick":subQuestoes};

  return (
    <div className="form-check">
      {checked 
        ? <input defaultChecked {...defaultAttributes} {...props}/>
        : <input {...defaultAttributes} {...props} />
      }
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioCollapse
