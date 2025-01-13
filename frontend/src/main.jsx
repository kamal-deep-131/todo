import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { Home, Login, Register } from './pages'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />} >
      <Route path='/' element={<Home />} index />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
