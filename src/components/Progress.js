import React,{ useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import bk from '../brooklynStamp.png'
import man from '../manhattanStamp.png'

function Progress() {

    const[bar, setBar] = useState(null)
    
    const progressForStamp = 60;


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
                    <h3>Brooklyn</h3>
                        <ProgressBar className='progressBar' variant='info' now={progressForStamp}/>
                    <h3>Manhattan</h3>
                        <ProgressBar className='progressBar' variant='info' now={progressForStamp}/>
                    <h3>Queens</h3>
                        <ProgressBar className='progressBar' now={100} label={'Coming Soon'}/>
                    <h3>Bronx</h3>
                        <ProgressBar className='progressBar' now={100} label={'Coming Soon'}/>
                    <h3>Staten Island</h3>
                        <ProgressBar className='progressBar' now={100} label={'Coming Soon'}/>
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