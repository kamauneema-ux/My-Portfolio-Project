import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Trailing slash stripped: React Router won't match "/repo" against basename "/repo/" */}
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
