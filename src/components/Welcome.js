import React from 'react'

import {Link} from 'react-router-dom'
//import Restaurants from './Restaurants'


function Welcome({ wishlist, beento  }) {

  console.log(wishlist)
  console.log(beento, 'heyyyyyyyyy')
  return (
    <div className='container'>
        <div className='row topRow'></div>

        <div className='col-lg-12 bookCover'>
          <div className='col-lg-12 insideBook'>
            <div className='col-lg-6 leftContent'>
              <h2>Wishlist</h2>
                {wishlist.map(restaurant => {
                  return (
                    <>
                      <h1>{restaurant.restaurant.name}</h1>
                    </>
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