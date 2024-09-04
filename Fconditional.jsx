import React from 'react'
import { Link } from 'react-router-dom';

function Fconditional  ()  {

    const isLoged= true;

    // const handleClick =()=>{
    //     setisLoged(isLoged);

    // }

  return (
    <div>
        {/* <button  onClick={handleClick}>Log In</button> */}
        {isLoged? 'sucessful': 'back to login'}

        <div>
          <Link to="/List">List</Link>
        </div>


    </div>
  )
}

export default Fconditional