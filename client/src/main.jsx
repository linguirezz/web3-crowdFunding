import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NewProjectPage from './pages/NewProjectPage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
  element:(
    <Dashboard/>
  )
  },
  {
    path:"/login",
  element:(
    <LoginPage/>
  )
  },
  {
    path:"/new",
  element:(
    <NewProjectPage/>
  )
  }
  
]
)
createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>,
)
