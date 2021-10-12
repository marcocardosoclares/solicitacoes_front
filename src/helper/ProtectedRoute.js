import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const ProtectedRoute = ({ children, ...rest }) => {
  const {login} = React.useContext(UserContext)
  return (
    <Route {...rest} render={() => {
      return login === true
        ? children
        : login === false ? <Redirect to='/' /> : null
    }} />
  )
}

export default ProtectedRoute
