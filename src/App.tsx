import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar1 from './pages/calendar1'
import Calendar2 from './pages/calendar2'
import Calendar3 from './pages/calendar3'
import Calendar4 from './pages/calendar4'
import Calendar5 from './pages/calendar5'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calendar5 />
    </>
  )
}

export default App
