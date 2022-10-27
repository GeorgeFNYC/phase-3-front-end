import React from 'react'

function RestaurantInfo({ restaurants }) {

    console.log(restaurants, ' From res info ')

  return (
    <>
        {restaurants.map((restaurant) => 
            <>
                <h2>{restaurant.name}</h2>
                <img id='resImg' src={restaurant.image_url} alt={restaurant.name}/>
                <p id='description'>{restaurant.description}</p>
            </>
        )}
    </>
  )
}

export default RestaurantInfo