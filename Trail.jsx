import React, { useState } from 'react'
import '../Components/Trail.css'


const Trail = () => {
  const [change,setChange]=useState("Hi,Shahim");

  // const modify =()=>{
  //   setChange("Welcome to my world")
  // };
 
  return (
    <div className='mainbox'>
 
    <h1>{change}</h1>
    <button onClick={()=>setChange("Welcome to My World")}>Click Me</button>
 
    
  
    </div>
  )
}

export default Trail;