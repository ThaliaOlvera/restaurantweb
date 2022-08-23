import React from 'react';
import {SubHeading}  from '../../components';
import {images} from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contacto"/>
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Ubicanos</h1>
     <div className="app__wrapper-content">
     <p className="p__opensans">Calle Mero #12, Av Carlos Nader, 77500 </p>
     <p className="p__opensans">Correo: Gabs@gabsrestaurant.com </p>
     <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0' }}>Horario de Apertura</p>
     <p className="p__opensans">Martes a Domingo: 10:00am- 11:30pm</p>
     <p className="p__opensans">Dias Festivos: 8am-8pm.</p>
     </div> 
     <button className='custom__button' style={{marginTop: '2rem'}}>Visitanos</button>   
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs imagen" />
    </div>
  </div>
);

export default FindUs;
