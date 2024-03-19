import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Product, Register, Cart } from '../Containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/cadastro" />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Product />} path="/produtos" exact />
          <Route element={<Cart />} path="/carrinho" exact />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
