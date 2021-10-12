import React from 'react'
import { SOLICITACOES, SOLICITACOES_SEARCH } from '../api/Api';
import Navbar from '../components/nav/NavBar';
import Alert from '../components/Alert';
import useFetch from '../hooks/useFetch';
import DataLoading from '../components/DataLoading';
import List from '../components/List';
import SemRegistros from '../helper/SemRegistros';
import { UserContext } from '../context/UserContext';
import IndexActions from '../components/nav/IndexActions';
// import AdminList from '../components/AdminList';

const Index = () => {
  const [loadingText, setLoadingText] = React.useState("Procurando Solicitações... ")
  const {user} = React.useContext(UserContext);
  const {data, loading, error, request} = useFetch(true);
  
  React.useEffect(() => {
    async function getIndex() {
      const {url} = SOLICITACOES();
      await request("get",url);
    } 
    getIndex();
  },[request])

  async function handleSearch(nome) {
    setLoadingText("Filtrando Solicitações...")
    const {url, options} = SOLICITACOES_SEARCH({"search":nome});
    await request("post",url,options);
  }

  if (error) return <Alert content={error} />;
  
  return (
    <>
      <Navbar userName={user.name} navActions={<IndexActions route="incluir" handleSearch={handleSearch} />} />
      {loading && <DataLoading text={loadingText} />}
      {data && (
        data.length 
        ? <List list={data} />
        : <SemRegistros content="Não há Solicitações" />
      )}
    </>
  )
  
}

export default Index
