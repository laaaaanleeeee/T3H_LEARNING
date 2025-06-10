import './App.css'
import logo from './assets/react.svg'

function App() {

  return (
    <>
      <div className="header">
            <img className='logo' src={logo} alt="Logo" />
            <button type="button" className='button_header'>Home</button>
            <button type="button" className='button_header'>Restaurants</button>
            <button type="button" className='button_header'>Features</button>
            <button type="button" className='button_header'>Testimonials</button>
            <button type="button" className='button_header'>Download</button>
            <button type="button" className='button_rightside'>Login Now</button>
            <button type="button" className='button_header_last'>Join Free</button>
      </div>

      <div className='content'>
          <div className='leftside'>
            <h1><b>Your favorite food, delivered your home</b></h1>
            <p>Food, drinks, groceries, and more available for delivery and pickup.</p>
            <div className='searchaddress'>
              <input className='inputaddress' id='inputaddress' type="text" placeholder='Enter your address..'></input>
              <button className='buttonaddress' type="button">Join Free</button>
            </div>
            <p>Apps Available to download on</p>
            <div className='download'>
              <button type='button' className='button_download'>
                <img className='logo' src={logo} alt="Logo" />
                <div className='title_download'>
                  <p>Download on the </p>
                  <p><b>App Store</b></p>
                </div>
              </button>
              <button type='button' className='button_download'>
                <img className='logo' src={logo} alt="Logo" />
                <div className='title_download'>
                  <p>Download on the </p>
                  <p><b>Google Play</b></p>
                </div>
              </button>
            </div>
          </div>


          <div className='rightside'>
              <img className='logo' src={logo} alt="Logo" />
          </div>
      </div>
    </>
  )
}

export default App
