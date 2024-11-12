import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App   />
    <Marks m1 = {99} m2 = {99} m3 = {99} />
    <Marks m1 = {59} m2 = {59} m3 = {59} />
  </StrictMode>,
)