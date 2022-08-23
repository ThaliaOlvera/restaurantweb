import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
     <img src={images.chef} alt="Chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef del Mundo"/>
      <h1 className='headtext__cormorant'>La pasion de la cocina</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque fugiat, ipsam possimus rerum quibusdam saepe!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique?</p>
      </div>
      <div className="app__chef-sign">
        <p>Daniela Soto</p>
        <p className='p__opensans'>Chef y Fundadora</p>
        <p className='p__opensans'>Daniela Soto</p>
        <img src={images.sign} alt="sign chef"/>
      </div>


    </div>
  </div>
);

export default Chef;
