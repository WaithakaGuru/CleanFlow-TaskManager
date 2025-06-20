import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CleanFlow from './CleanFlow'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CleanFlow/>
  </StrictMode>,
)
