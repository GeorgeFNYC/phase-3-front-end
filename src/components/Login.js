import logo from '../Logo.png'
import flag from '../flag.png'
import '../App.css'
//import Welcome from './Welcome'

import React from 'react'

function Login() {
  return (
    <div className="container">
    <div className='row topRow'></div>
    
    <div className='col-lg-3'></div>

      <div className='col-lg-6'>
        <div id='ressportHP' className='col-lg-12'>
          <h1 className='homePG_HTag'>Ressport</h1>
          <img id="logoHP"src={logo} alt="logo"/>
          <div id='helloConsole'>
            <a href='/' id='homeLogIn'>Login</a>
          </div>
          <h2 style={{fontStyle: 'italic'}}className='homePG_HTag'>New York City</h2>
          <img id="flagHP" src={flag} alt="flagLogo"/>
        </div>
      </div>

    <div className='col-lg-3'></div>
  </div>
  )
}

export default Login