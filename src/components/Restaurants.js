import React, { useState } from 'react'

import RestaurantInfo from './RestaurantInfo'


function Restaurants( {restaurants} ) {

    //console.log(restaurants, 'restaurants variable')
    //console.log(restaurants)

// const[showRes, setShowRes] = useState(false)

// const handleClick = () => {
//     console.log()
//     return handleClick
// }

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
                                <li onClick= {() => console.log(restaurant.id)} key={restaurant.id}>
                                    {restaurant.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6 rightContent'>
                        <RestaurantInfo restaurants={restaurants}/>
                        {/* <h2>Restaurant name</h2>
                        <img alt='Restaurant' id='resImg' src='https://via.placeholder.com/900'/>
                        <p id='description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id facilisis leo. Proin viverra faucibus volutpat. Integer pharetra ut massa quis porttitor. Donec aliquam ac nunc sed feugiat. Nullam eu consequat orci, id elementum ex. Phasellus eleifend pharetra imperdiet. Aliquam ut tempor libero. Proin consequat nunc vel arcu tempor, cursus. </p> */}

                </div>
            </div>
        </div>
    </div> 
  )
}

export default Restaurants