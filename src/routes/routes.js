import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
