import React from 'react'
import { Route, redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components/Header'

function PrivateRoute({ element, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return redirect('/login')
  }

  return (
    <>
      <Header />
      <Route {...rest} Component={element} />
    </>
  )
}
export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
