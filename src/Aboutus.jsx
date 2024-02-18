import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Aboutushero from './components/Aboutus/Aboutushero'
import Aboutusdetails from './components/Aboutus/Aboutusdetails'
import OurRenovationservices from './components/Renovationservices/OurRenovationservices'
import Aboutotherservices from './components/Aboutus/Aboutotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Aboutus = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>About Us &#124; Infratech Builders, Chennai</title>
        <meta name='description' content="Infratech Builders, with a decade-long legacy of excellence in construction and interior design, crafting spaces with precision in Chennai. Find out more." />
      </Helmet>
      <Aboutushero
        handleOrderPopup={handleOrderPopup} />
      <WhatsAppButton />
      <Aboutusdetails
      />
      <Aboutotherservices
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup type={"About us"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
      <Callusbanner />
    </div>
  )
}

export default Aboutus 