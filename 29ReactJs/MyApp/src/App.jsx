import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar, {Home} from './Navbar'
import Card from './Card'

// If you importing something that doesn't exists 
// then it will show error in console








// Practice-1:

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








// Practice-2:

// Whenever you declare a variable, declare it inside the component function
// otherwise, maybe it will create an issue later

// function App() {
//   const firstName = 'Lakshaya';
  
//   return (
//     <div>
//       {/* Use {} to show variables value on UI */}
//       {firstName}
//     </div>
//   )
// }








// Practice-3:

// Creating 2 buttons-
//   One for increasing the value of a variable
//   Second one for decreasing the value of a variable
// Using Inline EventListner and Arrow Function

// function App() {
//   let count = 0;
  
//   return (
//     <div>
//       <button onClick={()=>{
//         console.log("Dec button clicked!")
//       }}>Dec count (-)</button>

//       <p>Count : {count}</p>

//       <button onClick={()=>{
//         console.log("Inc button clicked!")
//       }}>Inc count (+)</button>
//     </div>
//   )
// }




// Without Arrow Function:

// function App() {
//   let count = 0;
  
//   const handleDecCount = function(){
//         console.log("Dec button clicked!");
//         count = count - 1;
//         console.log('count : ', count);
//   }

//   const handleIncCount = function(){
//         console.log("Dec button clicked!");
//         count = count + 1;
//         console.log('count : ', count);
//   }

//   // When we click buttons on UI then these two function will called and they
//   // increase or decrease the value, but only on console no change on UI

//   // For this problem we have the concept of "Hooks" --

//   return (
//     <div>
//       <button onClick={handleDecCount}>Dec count (-)</button>

//       <p>Count : {count}</p>

//       <button onClick={handleIncCount}>Inc count (+)</button>
//     </div>
//   )
// }









// Practice-4:

// Hooks -> Special types of Functions or Methods that provide certain functionality
// e.g. =>  useState, useEffect, useContext, useMemo, useCallback, etc.

// For updating variables value on UI, useState is the solution
// useState always imports from react

// function App() {

//   // Syntax of simple variable declaration:
//   // let count = 0;
//   // let firstName = "Lakshaya";
//   // let data = [];

//   // Syntax of declaring variable using useState:
//   const [count, setCount] = useState(0);
//   const [firstName, setFirstName] = useState("Lakshaya");
//   const [data, setData] = useState([]);
  
//   console.log(count);
//   // console.log(firstName);
//   // console.log(data);


//   const handleDecCount = function(){
        
//       // Simple value updating:
//         // count = count - 1;
//         // console.log('count : ', count);


//     // Updating value through useState:
//     setCount(count-1);  // This function is used to set initial value
    
//   }

//   const handleIncCount = function(){
        
//     // Simple value updating:
//         // count = count + 1;
//         // console.log('count : ', count);


//     // Updating value through useState:
//     setCount(count+1);  // This function is used to set initial value

//   }

//   return (
//     <div>
//       <button onClick={handleDecCount}>Dec count (-)</button>

//       <p>Count : {count}</p>

//       <button onClick={handleIncCount}>Inc count (+)</button>
//     </div>
//   )
// }








// Practice-5:

// Data Transfer:
// In react you can transfer data from parent component ("Card.jsx") to 
// child component ("<Card/>") with the help of "props"

// Props: same component contains different data
// In this example each <Card/> component containes different data

function App() {
  const firstName = 'Lakshaya';
  
  return (
    <div style={styles.container}>

      <Card image="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" title="Dhoom Machale Shoes" price={25000}/> 

      <Card image="https://img.freepik.com/premium-vector/cosmetic-packaging-design_86047-37.jpg?w=740" title="Face Wash" price={500}/>

      <Card image="https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2R1Y3R8ZW58MHwyfDB8fHww&auto=format&fit=crop&q=60&w=600" title="Next-Gen Headphone" price={1300}/>

      <Card image="https://img.freepik.com/premium-photo/household-cleaning-products_863013-118522.jpg" title="Cleaning Stuff" price={799}/>
      
      <Card image="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHwyfDB8fHww&auto=format&fit=crop&q=60&w=600" title="Kids Toy Car" price={350}/>
      
      <Card image="https://images.unsplash.com/photo-1581191853005-15f8b24f6302?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHwyfDB8fHww&auto=format&fit=crop&q=60&w=600" title="Coffee Beans" price={1200}/>
      
      <Card image="https://images.unsplash.com/photo-1601592908805-7513f10bb3e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxwcm9kdWN0fGVufDB8MnwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" title="Ear Buds Ultra" price={1600}/>
    </div>
  )
}


// Multiple Css in a object:
const styles = {
  container : {
    display : "flex",
    gap : "20px",
    flexWrap : "wrap",
    justifyContent : "center"
  }
    
}


export default App
