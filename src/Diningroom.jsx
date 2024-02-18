import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Diningroomhero from './components/Diningroomhero/Diningroomhero'
import Diningroomweprovidetext from './components/Diningroomweprovide/Diningroomweprovidetext'
import Diningroomweprovide from './components/Diningroomweprovide/Diningroomweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Diningroom = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>Dining Room Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Revamp your dining area with customizable dining room designs offered by Infratech Builders in Chennai ensuring every meal is enjoyed with comfort. Call us!' />
      </Helmet>
      <WhatsAppButton />
      <Diningroomhero
        handleOrderPopup={handleOrderPopup} />
      <Diningroomweprovidetext />
      <Diningroomweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Dining Room"} />

      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Diningroom 