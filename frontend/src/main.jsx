import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import {Toaster } from './components/ui/toaster'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
          <App />
          <Toaster /> 
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
