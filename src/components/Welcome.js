import React from 'react'
import Restaurants from './Restaurants'


function Welcome({ wishlist }) {
  console.log(wishlist)
  return (
    <div className='container'>
        <div className='row topRow'></div>

        <div className='col-lg-12 bookCover'>
          <div className='col-lg-12 insideBook'>
            <div className='col-lg-6 leftContent'>
              <h2>Visited</h2>
              <p>Restaurant 1</p>
            </div>
            <div className='col-lg-6 rightContent'>
              <h2>Wishlist</h2>
                {wishlist.map(restaurant => {
                  return (
                    <>
                      <h1>{restaurant.restaurant.name}</h1>
                    </>
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