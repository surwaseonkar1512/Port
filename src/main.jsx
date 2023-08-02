import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <App className="bg-[#0e0303] h-screen w-full" />
      <Toaster/>
    </BrowserRouter>
  </React.StrictMode>,
)
