import React from 'react'
import './styles/App.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { UserStorage } from './context/UserContext';
import Login from './login/Login'
import ProtectedRoute from './helper/ProtectedRoute';
import Solicitacoes from './solicitacoes/Solicitacoes'

function App() {
  return (
    <Router> {/*  basename={"/solicitacoes"} */}
      <UserStorage>
        <div className="min-vh-100 bg-primary-05">
          <Switch>
            <ProtectedRoute path="/solicitacoes"><Solicitacoes /></ProtectedRoute> 
            <Route path="/login"><Login /></Route> 
            <Route path="/"><Redirect to="/login" /></Route> 
          </Switch>
        </div>
      </UserStorage>
    </Router>
  );
}

export default App;
