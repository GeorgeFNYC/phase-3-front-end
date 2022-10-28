import React, { useState } from 'react'
import {Link} from 'react-router-dom'
//import Restaurants from './Restaurants'


function Welcome({ wishlist, beento, renderDeleteWish  }) {


  const handleDeleteClick = (restaurants) => {
    console.log(restaurants);
    fetch(`http://localhost:9292/wishlist/${restaurants.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => renderDeleteWish(data))
  }

  return (
    <div className='container'>
        <div className='row topRow'></div>

        <div className='col-lg-12 bookCover'>
          <div className='col-lg-12 insideBook'>
            <div className='col-lg-6 leftContent'>
              <h2>Wishlist</h2>
                {wishlist.map(restaurant => {
                  return (
                    <div key={restaurant.id}>
                      <p className='wishVisitedP'>{restaurant.restaurant?.name}<span onClick={() => {handleDeleteClick(restaurant)}} className='minusWish'>remove</span></p>
                    </div>
                  )
                }
                )}
                <div className='row'>
                  <Link to={'/restaurants'}>
                    <button className='addResBtn'>Add more restaurants to your wishlist</button>
                  </Link>
                </div>
            </div>
            
            <div className='col-lg-6 rightContent'>
            <h2>Visited</h2>
              

                {beento.map(restaurant => {
                  return (
                    <div key={restaurant.id}>
                      <p className='wishVisitedP' key={restaurant.id}>{restaurant.restaurant.name}</p>
                    </div>
                  )
                }
                )}
            </div>
          </div>
        </div>

    </div>
  )
}

export default Welcome