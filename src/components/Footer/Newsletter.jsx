import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import {useState} from 'react';
import { db } from "../../firebase/firebase";
import { collection, addDoc, clearIndexedDbPersistence} from "firebase/firestore";

import './Newsletter.css';






const Newsletter = () => {
  
  const formularioInicial = {
    nombre: "",
    correo: "",
    telefono: "",
  }

  const [form, setForm] = useState(formularioInicial);
  
  const obtenerUsuario= async () => {
    const data = collection (db, "usuarios")
    await addDoc (data, form)
    console.log("Datos Enviados")
    setForm(formularioInicial);

  };

  
  
  
  return(
    <>
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title=""/>
      <h1 className='headtext__cormorant'>Reserva con nosotros</h1>
      <p className="p__opensans">Nos comunicaremos contigo para revisar fechas y horarios.</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="text" value={form.nombre} onChange={(e) => setForm({...form, nombre:e.target.value})}  id="clientname" placeholder='Introduce tu nombre' />
      <input type="number" value={form.telefono}  onChange={(e) => setForm({...form, telefono:e.target.value})} id="phonenumber" placeholder='Introduce tu numero de telefono' />
      <input type="email" value={form.correo}  onChange={(e) => setForm({...form, correo:e.target.value})} id="emailadrees" placeholder='Introduce tu correo' />
      <br></br>
      <button type="submit" className='custom__button'  onClick={obtenerUsuario}>Enviar</button>
    </div>

  </div>
  </>
);
}



export default Newsletter;
