import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>

  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
