import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import  './Navbar.css';
import {Link} from 'react-router-dom';
import React from 'react';
import { loginGoogle } from '../../firebase/Signin';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className="app_navbar">
    <div className="app_navbar_logo">
      <img src={images.Gabs} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
    <li className='p_opensans'><Link to='/Header'>Inicio</Link></li>
    <li className='p_opensans'><Link to='/AboutUs'>Acerca de nosotros</Link></li>
    <li className='p_opensans'><Link to='/FindUs'>Ubicanos</Link></li>
    <li className='p_opensans'><Link to='/Footer'>Reservar</Link></li>
    </ul>
    <div className='app_navbar-login'>
      <Link to='/' className='p_opensans' onClick={loginGoogle}>Log in/Register</Link>
      <Link to='/' className='p__opensans'>Blog</Link>
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color= "#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={67} color= "#fff" className= "overlay__close" onClick={() => setToggleMenu(false)} />
      
      <ul className='app_navbar-smallscreen_links'>
       <li className='p_opensans'><a href='#home'>Inicio</a></li>
       <li className='p_opensans'><a href='#about'>Acerca de nosotros</a></li>
       <li className='p_opensans'><a href='#menu'>Ubicanos</a></li>
       <li className='p_opensans'><a href='#reservar'>Reservar</a></li>
      </ul>
      </div>
      )}

    </div>
  </nav>
 )
}


export default Navbar;
