import React from 'react';
import {SubHeading}  from '../../components';
import {images} from '../../constants';

import './Gallery.css';

const Gallery = () => {
  
  return(
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Lo Mejor"/>
      <h1 className="headtext__cormorant">Foto de galeria</h1>
      <p className='p__opensans' >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, molestiae.
      </p>
      <button type='button' className='custom__button'>Ver más</button>
    </div>

    {/* Aqui comienza la galeria */}
    <div className="app__gallery-images ">
      
       <div className="app__gallery-images_container"> 
       
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         
         <div className="app__gallery-images_card carousel-inner  flex__center">

           <div className="carousel-item active">
            <img src={images.gallery03} className="d-block w-100" alt="imgfood3"/>
           </div>

           <div className="carousel-item">
             <img src={images.gallery01} className="d-block w-100" alt="imgfood1"/>
           </div>

           <div className="carousel-item">
             <img src={images.gallery02} className="d-block w-100" alt="imgfood2"/>
           </div>

           <div className="carousel-item">
             <img src={images.gallery04} className="d-block w-100" alt="imgfood4"/>
           </div>

         </div>

         </div>

       </div>
      


      </div>
  </div>
);}

export default Gallery;
