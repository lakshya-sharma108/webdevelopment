import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar, {Home} from './Navbar'
import Card from './Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App
