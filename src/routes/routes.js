import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Product, Register } from '../Containers'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/produto" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
