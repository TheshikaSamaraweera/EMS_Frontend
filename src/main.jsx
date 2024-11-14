import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import Test from './Test.jsx'
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListEmployeeComponent/>
  </StrictMode>,
)
