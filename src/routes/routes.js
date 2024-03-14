import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Product, Register, Cart } from '../Containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="*" element={<Home />}>
          <Route path="*" element={<PrivateRoute />} />
        </Route>
        <Route path="/produtos" element={<Product />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
