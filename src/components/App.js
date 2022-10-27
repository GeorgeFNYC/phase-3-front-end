
import Login from './Login'
import Welcome from './Welcome'
import Progress from './Progress'
import Restaurants from './Restaurants';
import RestaurantInfo from './RestaurantInfo'



import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [restaurants, setRestaurants] = useState([])
  const [wish, setWish] = useState([])
  const [visited, setVisited] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
    .then((response) => response.json())
    .then(restaurants => setRestaurants(restaurants));

    fetch('http://localhost:9292/wishlist')
    .then((response) => response.json())
    .then(wishlist => {
      setWish(wishlist) 
      //setVisited(wishlist)
    });


    fetch('http://localhost:9292/eated')
    .then((response) => response.json())
    .then(visited => {
      setVisited(visited) 
      //setVisited(wishlist)
    });


    // fetch('http://localhost:9292/wishlist')
    // .then((response) => response.json())
    // .then(visitedList => setVisited(visitedList));
  },[])

  

  // console.log(restaurants[0].reviews)

  //const[hide, setHide] = useState(true)

  return (
    <>
      <Routes>
        <Route exact path='/restaurants' element={<Restaurants restaurants={restaurants} />} />
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path='/welcome' element={<Welcome wishlist={wish} beento={visited} />}></Route>
        <Route exact path='/progress' element={<Progress />}></Route> 
        <Route exact path='/restaurantsInfo' element={<RestaurantInfo />}></Route>
      </Routes>
    </>
  );


}

export default App;
