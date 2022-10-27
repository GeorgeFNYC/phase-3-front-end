import React, {useState} from 'react'

function RestaurantInfo({ restaurants, info, addToWishList, addToVisited, handleDeleteClick }) {

    console.log(restaurants, ' From res info ')

   return (
    <>
    { info ? <>
      <h2>{restaurants.name}</h2>
      <img id='resImg' alt='name' src={restaurants.image_url}/>
      <p id='description'>{restaurants.description}</p>
      <span id='starReview'>Rating: {restaurants.reviews}</span>
      <span id='cuisineType'>Cuisine: {restaurants.cuisine}</span>
      <span id='pricePoint'>Price: {restaurants.price_point}</span>
      <p id='borough'>Borough: {restaurants.location}</p>
      <p id='address'>Address: {restaurants.address}</p>
      <button onClick={()=> addToWishList(restaurants)} className='addResBtn'>Add {restaurants.name} to your wishlist!</button>
      <a href='/welcome' className='addResBtn'>View your wishlist</a>
      <button onClick={() => addToVisited(restaurants)}>I've been to</button>
      <button onClick={()=> handleDeleteClick(restaurants)} id='Removefromwishlist'>Remove from Wishlist</button>
      {/* <a href='/welcome' id='backBtn'>View your wishlist</a> */}
      </> 
      : <></>
      }
      
    </>
  )
}

export default RestaurantInfo