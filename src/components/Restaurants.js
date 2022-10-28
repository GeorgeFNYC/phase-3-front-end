import React, { useState, useEffect } from 'react'

import RestaurantInfo from './RestaurantInfo'


function Restaurants( {restaurants, renderToWishlist} ) {

    const[showRes, setShowRes] = useState([])
    const [info, setInfo] = useState(false)

function showRestaurants (restaurant) {
    setInfo(true)
    setShowRes(restaurant)
}


// const addToBeenTo = (restaurant) => {
//     fetch('http://localhost:9292/wishlist',
    
//     {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             restaurant_id: restaurant.id,
//             user_id: 1
//             // been_to: false
//         })
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }


const addToWishList = (restaurant) => {
    fetch('http://localhost:9292/wishlist',
    
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            restaurant_id: restaurant.id,
            user_id: 1
            // been_to: false
        })
    })
    .then((res) => res.json())
    .then((data) => renderToWishlist(data))
}



const addToVisited = (restaurant) => {
    console.log(restaurant.id)
    fetch('http://localhost:9292/eated',
    
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            restaurant_id: restaurant.id,
            user_id: 1
        })
    })
    .then((res) => res.json())
    .then((data) => (data))
}



  return (
    <div className='container'>
        <div className='row topRow'></div>
        <div className='col-lg-12 bookCover'>
            <div className='col-lg-12 insideBook'>
                <div className='col-lg-6 leftContent'>
                    <div className='row'>
                        <h2>Restaurants</h2>
                    </div>
                    <div id='resRow'className='row'>
                        <ul>
                            {restaurants.map((restaurant) => 
                                <li className='liForRestaurant' onClick= {() => showRestaurants(restaurant)} key={restaurant.id}>
                                    {restaurant.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6 rightContent'>
                        <RestaurantInfo restaurants={showRes} info={info} addToWishList={addToWishList} addToVisited={addToVisited}/>
                        
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Restaurants