import React from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

const FormLink = ({color, route, children}) => {
  let {url} = useRouteMatch()
  return <Link to={`${url}/${route}`} className={`text-decoration-none text-${color}`}>{children}</Link>
}

export default FormLink
