import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../layout.jsx'
import Login from '../Pages/Loginpage/index.jsx'
import SignUp from '../Pages/Signuppage/index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>,
     <Route path="login" element={<Login />} />
    </>

  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
