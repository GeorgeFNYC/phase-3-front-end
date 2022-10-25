
import '../App.css';
import Login from './Login'
import Welcome from './Welcome'
import Progress from './Progress'



//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  //const[hide, setHide] = useState(true)

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path='/welcome' element={<Welcome />}></Route>
        <Route exact path='/progress' element={<Progress />}></Route>
      </Routes> 
    </>
  );


}

export default App;
