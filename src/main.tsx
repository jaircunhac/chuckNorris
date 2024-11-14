import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './pages/home'
import Header from './pages/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Home /> */}
  <Header />
  </StrictMode>,
)
