
import '../App.css';
import Login from './Login'
import Welcome from './Welcome'
import Progress from './Progress'
import Restaurants from './Restaurants';



import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
    .then((response) => response.json())
    .then(restaurants => setRestaurants(restaurants));
  },[])

  console.log(restaurants, 'From App.js')

  // console.log(restaurants[0].reviews)

  //const[hide, setHide] = useState(true)

  return (
    <>
      <Routes>
        <Route exact path='/restaurants' element={<Restaurants restaurants={restaurants} />} />
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path='/welcome' element={<Welcome />}></Route>
        <Route exact path='/progress' element={<Progress />}></Route> 
      </Routes>
    </>
  );


}

export default App;
