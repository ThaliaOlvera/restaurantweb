import React from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';

import  './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
  <nav className="app_navbar">
    <div className="app_navbar_logo">
      <img src={images.Gabs} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
    <li className='p_opensans'><a href='#home'>Inicio</a></li>
    <li className='p_opensans'><a href='#about'>Acerca de nosotros</a></li>
    <li className='p_opensans'><a href='#menu'>Menu</a></li>
    <li className='p_opensans'><a href='#reservar'>Reservar</a></li>
    </ul>
    <div className='app_navbar-login'>
      <a href='#login' className='p_opensans'>Log in/Register</a>
      
      <a href='/' className='p__opensans'>Blog</a>
      
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color= "#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={67} color= "#fff" className= "overlay__close" onClick={() => setToggleMenu(false)} />
      
      <ul className='app_navbar-smallscreen_links'>
       <li className='p_opensans'><a href='#home'>Inicio</a></li>
       <li className='p_opensans'><a href='#about'>Acerca de nosotros</a></li>
       <li className='p_opensans'><a href='#menu'>Menu</a></li>
       <li className='p_opensans'><a href='#reservar'>Reservar</a></li>
      </ul>
      </div>
      )}

    </div>
  </nav>
 )
}


export default Navbar;
