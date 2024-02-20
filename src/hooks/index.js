import React from 'react'

import PropTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

AppProvider.proTypes = {
  children: PropTypes.node
}

export default AppProvider
