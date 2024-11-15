import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterComponent from './components/FooterComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx'
import HeadderComponent from './components/HeadderComponent.jsx'
import EmployeeComponent from './components/EmployeeComponent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <HeadderComponent/>
        <Routes>
          <Route path ='/' element ={<ListEmployeeComponent/>}></Route>
          <Route path ='/employees' element ={<ListEmployeeComponent/>}></Route>
          { <Route path= '/add-employee' element ={<EmployeeComponent/>}></Route> }
        </Routes>
        <FooterComponent/>

      </BrowserRouter>
      
    </>

  )
}

export default App
