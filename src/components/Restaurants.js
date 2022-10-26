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
                    <div className='row'>
                        <h2>Restaurants</h2>
                    </div>
                    <div id='resRow'className='row'>
                        <ul>
                            {restaurants.map((res) => 
                                <>
                                    <li key={res.id}>{res.name}</li>
                                    <span>Add +</span>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6 rightContent'>
                    


                </div>
            </div>
        </div>
    </div> 
  )
}

export default Restaurants