import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
       <h1 className="app__footer-headtext">Contact</h1>
       <p className="p__opensans">Calle Mero #12, Av Carlos Nader, 77500 </p>
       <p className="p__opensans">Telefono </p>
       <p className="p__opensans"> +172 55 4854 15 </p>
      </div>
      <div className="app__footer-links_logo">
       <img src={images.gericht} alt="Footer logo"/>
       <p className="p__opensans">
        "La excelencia está en la diversidad
         y el modo de progresar es conocer y
          comparar las diversidades de productos, culturas y técnicas"
       </p>
       <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}}/>
       <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
       </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Horario de apertura</h1>
       <p className="p__opensans">Martes A Domingo: 10:00am- 11:30pm </p>
       <p className="p__opensans"> Dias Festivos: 8am-8pm. </p>
      </div>

    </div>

      <div className='footer__copyright'>
        <p className="p__opensans">
          Made whit love for Thalia Olvera
        </p>
      </div>

  </div>
);

export default Footer;
