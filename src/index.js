import React from 'react'
import ReactDOM from 'react-dom'

import Login from './Containers/Login'
import GlobalStyles from './styles/globalStyles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    <Login />,
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
