import React, {useState} from 'react'

function RestaurantInfo({ restaurants, info, addToWishList }) {

    console.log(restaurants, ' From res info ')

   return (
    <>
    {info ? <>
      <h2>{restaurants.name}</h2>
      <img id='resImg' alt='name' src={restaurants.image_url}/>
      <p id='description'>{restaurants.description}</p>
      <span id='starReview'>Rating: {restaurants.reviews}</span>
      <span id='cuisineType'>Cuisine: {restaurants.cuisine}</span>
      <span id='pricePoint'>Price: {restaurants.price_point}</span>
      <p id='borough'>Borough: {restaurants.location}</p>
      <p id='address'>Address: {restaurants.address}</p>
      <button onClick={()=> addToWishList(restaurants)} id='addResBtn'>Add to Wishlist</button>
      <a href='/welcome' id='homeLogIn'>Wishlist</a>
      </> 
      : <></>}
      
    </>
  )
}

export default RestaurantInfo