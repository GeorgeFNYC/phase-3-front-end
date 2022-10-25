import '../App.css';

import React from 'react'

function Welcome() {
  return (
    <div className='container'>
        <div id='topRow' className='row'></div>

        <div id='welcomeDiv' className='col-lg-12'>
          <div id='insideBook' className='col-lg-12'>
            <div className='col-lg-6'id='visitedContent'>
              <h2>Visited</h2>
              <p>Restaurant 1</p>
            </div>
            <div className='col-lg-6' id='wishlistContent'>
              <h2>Wishlist</h2>
              <p>Restaurant 1</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Welcome