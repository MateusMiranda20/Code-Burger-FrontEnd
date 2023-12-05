import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './Containers/Login'
// import Register from './Containers/Register'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
