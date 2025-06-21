import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProtectedRoutes from './components/utils/ProtectedRoutes'

import HomeTemplate from './components/templates/HomeTemplate.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<h1>Login</h1>}/>

        <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/courses' element={<h1>Courses</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
