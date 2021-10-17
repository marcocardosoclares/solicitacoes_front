import React from 'react'
import { FETCH_IC } from '../api/Api';
import useFetch from '../hooks/useFetch';
import Alert from '../components/Alert';
import Loading from '../components/Loading';

const Especialidades = ({label, name, colSize, getvalue, ...props}) => {

    const {data, loading, error, request} = useFetch();
    const [value, setValue] = React.useState(getvalue || '')

    React.useEffect(() => {
      async function especialidades() {
        const {url} = FETCH_IC("especialidades");
        await request("get",url);
      }
        
      especialidades();
    },[request])

    function handleChange({target}) {
      setValue(target.value);
    }

    return (
      <>
        <div className={`${colSize ? colSize : ''} col-12 mb-3`}>
          <label htmlFor={name} className="form-label">{label}</label>
          {loading && <div><Loading content="Carregando..." /></div>}
          {error && <Alert content="Não foi possível carregar as especialidades" />}
          {data && (
            <select className="form-select form-control" name={name} id={name} aria-label="Selecionar Especialidade" value={value} onChange={handleChange} {...props}>
              <option>Selecione...</option>
              {data.map(option =>  (<option key={option.id} value={option.id}>{option.nome}</option>
                ))
              }
            </select>
          )}
        </div>
      </>
    )
}

export default Especialidades
