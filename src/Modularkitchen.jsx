import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Modularkitchenhero from './components/Modularkitchenhero/Modularkitchenhero'
import Modularkitchenweprovidetext from './components/Modularkitchenweprovide/Modularkitchenweprovidetext'
import Modularkitchenweprovide from './components/Modularkitchenweprovide/Modularkitchenweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import { Link } from "react-router-dom";
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'


const Modularkitchen = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>

      <Helmet>
        <title>Modular Kitchen Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Enhance the heart of your home with modular kitchen expertise of Infratech Builders, delivering innovative designs with high quality in Chennai. Enquire today!' />
      </Helmet>
      <WhatsAppButton />
      <Modularkitchenhero
        handleOrderPopup={handleOrderPopup} />
      <Modularkitchenweprovidetext />
      <Modularkitchenweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup type={"Modular Kitchen"} orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Modularkitchen