import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

export const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutUs'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter"/>
    </div>

    <div className='app__aboutus-content  flex__center'>
     <div className='app__aboutus-content_about'>
      <h1 className='headtext__cormorant'>Acerca de Nosotros</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img' />
      <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, fugiat?</p>
      <button type='button' className='custom__button'>Conoce Más</button>         
     </div>

     <div className="app__about-content_knife flex__center">
      <img src={images.knife} alt="knife"/>
     </div>

     <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Conoce nuestra historia</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img' />
      <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, fugiat?</p>
      <button type='button' className='custom__button'>Conoce Más</button>         
     </div>

    
    </div>
  </div>
);
