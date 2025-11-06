import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar, {Home} from './Navbar'
import Card from './Card'

// If you importing something that doesn't exists 
// then it will show error in console



// function App() {
  
//   return (
    
//     <div>
//       {/* <Navbar/> */}
//       {/* <Home/> */}

//       {/* All Products will show in the middle of the web page because
//           of App.css and index.css 
//       */}
//       <Card/> 
//       <Card/>
//       <Card/>
//       <Card/>
//     </div>
//   )
// }






// Whenever you declare a variable, declare it inside the component function
// otherwise, maybe it will create an issue later

function App() {
  const firstName = 'Lakshaya';
  
  return (
    <div>
      {/* Use {} to show variables value on UI */}
      {firstName}
    </div>
  )
}

export default App
