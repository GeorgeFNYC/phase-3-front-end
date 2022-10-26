import React, { useState } from 'react'

import '../App.css'

function Restaurants( {restaurants} ) {

    //console.log(restaurants, 'restaurants variable')
    console.log(restaurants)

const[showRes, setShowRes] = useState(false)

const handleClick = () => {
    console.log(restaurants.name)
}

  return (
    <div className='container'>
        <div className='row topRow'></div>
        <div className='col-lg-12 bookCover'>
            <div className='col-lg-12 insideBook'>
                <div className='col-lg-6 leftContent'>
                    <h2>Restaurants</h2>

                    <ul>
                            {restaurants.map((res) => 
                                <>
                                    <li key={res.id}>{res.name}</li>
                                    <button>Add to Wishlist</button>
                                    <button onClick = {handleClick} >More Info</button>
                                </>
                            )}
                    </ul>
                    
                </div>
                <div className='col-lg-6 rightContent'>
                    


                </div>
            </div>
        </div>
    </div> 
  )
}

export default Restaurants