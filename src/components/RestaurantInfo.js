import React from 'react'
import { Link } from "react-router-dom";

function RestaurantInfo({ renderToWishlist,restaurants, info, addToWishList, addToVisited, handleDeleteClick }) {

   return (
    <>
    { info ? <>
      <h2>{restaurants.name}</h2>
      <img id='resImg' alt='name' src={restaurants.image_url}/>
      <p id='description'>{restaurants.description}</p>
      <div id='moreInfo'>
        <span id='starReview'><strong><em>Rating:</em></strong> {restaurants.reviews}</span>
        <span id='cuisineType'><strong><em>Cuisine:</em></strong> {restaurants.cuisine}</span>
        <span id='pricePoint'><strong><em>Price:</em></strong> {restaurants.price_point}</span>
        <span id='borough'><strong><em>Borough:</em></strong> {restaurants.location}</span>
        <span id='address'><strong><em>Address:</em></strong> {restaurants.address}</span>
      </div>
      <div id='addAndViewBtn'>
        <button onClick={()=> addToWishList(restaurants)} className='addResBtn'>add {restaurants.name} to your wishlist!</button>
        <Link to={'/welcome'}><button className='addResBtn' >view your wishlist</button></Link>
      </div>
      <div id='lastBtnDiv'>
        <button className='addResBtn' onClick={() => addToVisited(restaurants)}>been there!</button> 
      </div>
      {/* <a href='/welcome' id='backBtn'>View your wishlist</a> */}
      </> 
      : <></>
      }
      
    </>
  )
}

export default RestaurantInfo