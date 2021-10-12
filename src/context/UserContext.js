import React from 'react'
import { GET_USER, TOKEN_POST, USER_LOGIN, USER_LOGOUT } from '../api/Api';
import apiClient from '../helper/ApiClient';
import { Redirect } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [user, setUser]                   = React.useState(null);
  const [login, setLogin]                 = React.useState(null);
  const [loading, setLoading]             = React.useState(false);
  const [error, setError]                 = React.useState(null);

  const userLogout = React.useCallback(
    async function() {
      const {url} = USER_LOGOUT();
      await apiClient.get(url);
      setLogin(false);
      setUser(null);
      setError(null);
      setLoading(false);
      window.localStorage.removeItem("userLogged");
      <Redirect to="/login" />;
    },
    [],
  );

  async function getUser() {
    const {url}     = GET_USER();
    const response  = await apiClient.get(url);
    setUser(response.data);
    setLogin(true);
  }
  
  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      // TOKEN
      const tokenPost = TOKEN_POST(); 
      await apiClient.get(tokenPost.url).catch(error => {throw new Error(error)});
      //AUTH
      const userAuth = USER_LOGIN({email,password});
      const authResponse = await apiClient.post(userAuth.url, userAuth.options)
      if (authResponse.data.ok) {
        window.localStorage.setItem("userLogged",true); 
        await getUser();
        <Redirect to="/solicitacoes" />;
      } else {
        setError(authResponse.data.mensagem);
        setLogin(false);
      }
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("userLogged");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          await getUser();
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  },[userLogout])

  return (
    <UserContext.Provider 
      value={{userLogin, userLogout, user, error, loading, login}}
    >
      {children}
    </UserContext.Provider>
  );
};
