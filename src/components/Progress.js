import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import '../App.css'
import bk from '../brooklynStamp.png'
import man from '../manhattanStamp.png'

function Progress() {
  return (
    <div className='container'>
        <div className='row topRow'></div>
        <div className='col-lg-12 bookCover'>
            <div className='col-lg-12 insideBook'>
                <div className='col-lg-6 leftContent'>
                    <h2>Progress</h2>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Brooklyn</h3>
                        <ProgressBar variant='info' now={30}/>
                    <br/>
                    <br/>
                    <h3>Manhattan</h3>
                    <ProgressBar variant='info' now={100}/>
                </div>
                <div className='col-lg-6 rightContent'>
                    <h2>Stamps collected</h2>
                    <br/>
                    <br/>
                    <img id='bkStamp' src={bk} alt='Brooklyn Stamp'/>
                    <br/>
                    <br/>
                    <img id='manStamp' src={man} alt='Manhattan Stamp'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress