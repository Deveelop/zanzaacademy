import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className=" bg-[F5F5F5] relative h-screen">
    <App />
    </main>
  </StrictMode>,
)
