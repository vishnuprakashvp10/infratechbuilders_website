import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Construction from './Construction';
import Commercialinteriordesigns from './Commercialinteriordesigns';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homeinteriors from './Homeinteriors';
import Modularkitchen from './Modularkitchen';
import Livingroomhall from './Livingroomhall';
import Falseceiling from './Falseceiling';
import Cupboard from './Cupboard';
import Diningroom from './Diningroom';
import ToiletBathroom from './ToiletBathroom';
import Tvshowcase from './Tvshowcase';
import Studyroom from './Studyroom';
import Poojaroom from './Poojaroom';
import Bedroom from './Bedroom';
import Turfconstruction from './Turfconstruction';
import Paintingservices from './Paintingservices';
import Renovationservices from './Renovationservices';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import ScrollToTop from './ScrollToTop';
import OrderPopup from './Popup';
import { FormContextProvider } from './contexts/FormSubmitted.context';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './components/NotFound';

const App = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup((e) => !e);
  };

  return (
    <>
      <HelmetProvider>
        <FormContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar orderPopup={showOrderPopup} handleOrderPopup={handleOrderPopup} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/commercial-interior-designs" element={<Commercialinteriordesigns />} />
              <Route path="/overview-home-interiors" element={<Homeinteriors />} />
              <Route path="/modular-kitchen" element={<Modularkitchen />} />
              <Route path="/living-room-hall" element={<Livingroomhall />} />
              <Route path="/false-ceiling" element={<Falseceiling />} />
              <Route path="/cupboard-Wardrobes" element={<Cupboard />} />
              <Route path="/dining-room" element={<Diningroom />} />
              <Route path="/toilet-bathroom" element={<ToiletBathroom />} />
              <Route path="/tv-show-case" element={<Tvshowcase />} />
              <Route path="/study-room" element={<Studyroom />} />
              <Route path="/pooja-room" element={<Poojaroom />} />
              <Route path="/bed-room" element={<Bedroom />} />
              <Route path="/multi-turf-construction" element={<Turfconstruction />} />
              <Route path="/painting-services" element={<Paintingservices />} />
              <Route path="/renovation-services" element={<Renovationservices />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <OrderPopup type={"Popup"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} timeoutReq={true} /> {/* Important */}
          </BrowserRouter>
        </FormContextProvider>
      </HelmetProvider>
    </>
  );
};

export default App;