

import {Route, Routes} from 'react-router-dom';
import { Header } from '../components/Headerbar/Header';
import { AboutUs } from '../container/AboutUs/AboutUs';
import FindUs from '../container/Findus/FindUs';
import Footer from '../container/Footer/Footer';
import Chef from '../container/Chef/Chef';
import Gallery from '../container/Gallery/Gallery';


const IndexNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='Header' element={<Header/>} />
        <Route path='AboutUs' element={<><AboutUs /><Chef /> <Gallery/> </> } />
        <Route path='FindUs' element={<FindUs />} />
        <Route path='Footer' element={<Footer/>} />


    </Routes>
  )
}

export default IndexNavigation