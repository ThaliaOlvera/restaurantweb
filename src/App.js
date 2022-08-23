import React from 'react';

import { Navbar } from './components';
import {Header} from './components/Headerbar/Header';
import {AboutUs} from './container/AboutUs/AboutUs';
import Chef from './container/Chef/Chef'
import Gallery from './container/Gallery/Gallery'
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Chef />
    <Gallery />

     {/*<FindUs />
    <Footer />  */}
  </div>
);

export default App;
