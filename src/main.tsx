import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './component/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className=" bg-[F5F5F5] relative h-screen">
    <App />
    <Footer/>
    </main>
  </StrictMode>,
)
