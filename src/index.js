import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './Containers/Login'
import Register from './Containers/Register'
// eslint-disable-next-line spaced-comment
/*import Register from './Containers/Register' */
import GlobalStyles from './styles/globalStyles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    <Register />
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
