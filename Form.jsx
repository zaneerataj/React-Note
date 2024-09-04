import React, { useState } from 'react'

function Form() {
    const[change,setChange]=useState();
    const[email,setemail]=useState();
    
    const handleChange=(event)=>{
        setChange(event.target.value)

    const onChange=(event)=>{
        setemail(event.target.value)
    }

    }
  return (
    <form action="">
        <div>
            <input type="text" value={change} onChange={handleChange} placeholder='Enter your Name'/>
            <input type="mail" value={email} onChange={onChange} placeholder='Enter your Email'/>
        </div>
        <div>
            <button type='submit' >submit</button>
        </div>
    </form>
  )
}

export default Form