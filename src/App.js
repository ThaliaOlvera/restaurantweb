import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom'
import { Navbar } from './components';
import './App.css';
import IndexNavigation from './routes/Routes';
import Login from './firebase/Signin';



const App = () => (
  <BrowserRouter>
   
    <Navbar />
    <IndexNavigation/>
  
  </BrowserRouter>
);

export default App;
