import React from 'react'
import { Route, redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../../src/components'

function PrivateRoute({ element, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return redirect('/login')
  }

  return (
    <>
      <Header />
      <Route {...rest} element={element} />
    </>
  )
}
export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
