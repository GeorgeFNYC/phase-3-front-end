
import '../App.css';
import Login from './Login'
import Welcome from './Welcome'



//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  //const[hide, setHide] = useState(true)

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path='/welcome' element={<Welcome />}></Route>
      </Routes> 
    </>
  );


}

export default App;
