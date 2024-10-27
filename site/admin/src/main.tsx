import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// index.jsx & index.css
import AppConnection from '@/aConnection/aAppConnection/index.tsx'
import '@/aConnection/bShadcnConnection/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppConnection />
  </StrictMode>,
)
