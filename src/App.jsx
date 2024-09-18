import { useState } from 'react'
import './App.css'
import Homepage from './components/HomePg';
import EmployeePage from './components/EmplPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center w-100'>
      <Homepage/>
      <EmployeePage/>
    </div>
     
    </>
  )
}

export default App