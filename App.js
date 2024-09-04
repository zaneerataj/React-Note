
import './App.css'; 
import List from './Components/List';

import Conditional from './Components/Conditional';
import Demo from './Components/Demo';
import Fconditional from './Components/Fconditional';
// import Form from './Components/Form';
import Trail from './Components/Trail';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';





function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Demo />}/>
    <Route path ='conditional' element={<Conditional/>}/>

  </Routes>
  </>
    // {/* <div >

    //   <Demo  name="Shahim"place="TIRUPPUR"/>
    //   <Trail/>
    //   <Conditional/>

    //   <Fconditional/>
    //   <Arraylist/>
    //   {/* <Form/> */}
    //   <List/>
    
    // </div> */
  );  
}

export default App;
