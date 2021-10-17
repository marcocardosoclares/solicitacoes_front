import { useContext, useEffect, useState} from 'react'
import { FETCH_IC, FETCH_SEARCH } from '../api/Api';
import Navbar from '../components/nav/NavBar';
import useFetch from '../hooks/useFetch';
import List from '../components/List';
import SemRegistros from '../helper/SemRegistros';
import { UserContext } from '../context/UserContext';
import IndexActions from '../components/nav/IndexActions';
import Placeholder from '../components/Placeholder';
import Head from '../helper/Head';

const Index = () => {
  const {user} = useContext(UserContext);
  const {request} = useFetch();
  const [statusList, setstatusList] = useState(null);
  const [indexList, setindexList] = useState(null);
  
  useEffect(() => {
    async function getIndex() {
      const statusParams = FETCH_IC("status");
      const statusResponse = await request("get",statusParams.url);
      setstatusList(statusResponse.response);
      const indexParams = FETCH_IC("solicitacoes");
      const indexResponse = await request("get",indexParams.url);
      setindexList(indexResponse.response);
    } 
    getIndex();
  },[request])

  async function handleSearch(busca, tipo) {
    setindexList(null);
    const {url, options} = FETCH_SEARCH("solicitacoes",{"search":busca, "type":tipo});
    const {response} = await request("post",url,options);
    setindexList(response);
  }

  return (
    <>
      <Head title="Solicitações" />
      {!statusList 
        ? <Placeholder height="9" width="80" />
        : <Navbar userName={user.name} navActions={<IndexActions perfil={user.perfis_id} route="incluir" 
        statuslist={statusList} handleSearch={handleSearch} />} 
        />
      }
      {!indexList 
        ? <Placeholder height="30" width="80" />
        : (indexList.length
          ? <List list={indexList} perfil={user.perfis_id} />
          : <SemRegistros content="Não há Solicitações" />
          )
      }
    </>
  )
  
}

export default Index
