import React from 'react'
import { FETCH_IC, FETCH_SEARCH } from '../api/Api';
import Navbar from '../components/nav/NavBar';
import Alert from '../components/Alert';
import useFetch from '../hooks/useFetch';
import DataLoading from '../components/DataLoading';
import List from '../components/List';
import SemRegistros from '../helper/SemRegistros';
import { UserContext } from '../context/UserContext';
import IndexActions from '../components/nav/IndexActions';

const Index = () => {
  const [loadingText, setLoadingText] = React.useState("Procurando Solicitações... ")
  const {user} = React.useContext(UserContext);
  const {data, loading, error, request} = useFetch(true);
  
  React.useEffect(() => {
    async function getIndex() {
      const {url} = FETCH_IC("solicitacoes");
      await request("get",url);
    } 
    getIndex();
  },[request])

  async function handleSearch(busca, tipo) {
    setLoadingText("Filtrando Solicitações...")
    const {url, options} = FETCH_SEARCH("solicitacoes",{"search":busca, "type":tipo});
    await request("post",url,options);
  }

  return (
    <>
      <Navbar userName={user.name} navActions={<IndexActions perfil={user.perfis_id} route="incluir" handleSearch={handleSearch} />} />
      {loading && <DataLoading text={loadingText} />}
      {error && <Alert content={error} />}
      {data && (
        data.length 
        ? <List list={data} perfil={user.perfis_id} />
        : <SemRegistros content="Não há Solicitações" />
      )}
    </>
  )
  
}

export default Index
