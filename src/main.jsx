import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ShopProvider } from './context/ShopProvider'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </React.StrictMode>,
)
  