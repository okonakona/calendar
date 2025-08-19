import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar1 from './pages/calendar1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calendar1 />
    </>
  )
}

export default App
