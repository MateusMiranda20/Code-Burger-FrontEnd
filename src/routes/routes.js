import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Product, Register, Cart } from '../Containers'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
