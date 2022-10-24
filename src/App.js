import logo from './Logo.png'
import flag from './flag.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <div id='topRow' className='row'></div>
      
      <div className='col-lg-3'></div>

        <div className='col-lg-6'>
          <div id='ressportHP' className='col-lg-12'>
            <h1 className='homePG_HTag'>Ressport</h1>
            <img id="logoHP"src={logo} alt="logo"/>
            <div><a href='/' id ='homeLogIn'>Login</a></div>
            <h2 className='homePG_HTag'>New York City</h2>
            <img id="flagHP" src={flag} alt="flagLogo"/>
          </div>
        </div>

      <div className='col-lg-3'></div>
    </div>
  );
}

export default App;
