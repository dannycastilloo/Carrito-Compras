import React from 'react'
import ReactDOM from 'react-dom/client'
import { Carrito } from './Carrito'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Carrito />
    </React.StrictMode>
  </BrowserRouter>,
)
