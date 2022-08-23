import React from 'react';
import SubHeading from '../SubHeading/SubHeading'

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'>Suscribete</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Introduce tu correo' />
      <button className='custom__button'>Suscribete</button>
    </div>

  </div>
);

export default Newsletter;
