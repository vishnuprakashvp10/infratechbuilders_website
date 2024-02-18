import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Cupboardhero from './components/Cupboardhero/Cupboardhero'
import Cupboardweprovidetext from './components/Cupboardweprovide/Cupboardweprovidetext'
import Cupboardweprovide from './components/Cupboardweprovide/Cupboardweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Cupboard = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>Cupboard & Wardrobe Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders in Chennai specializes in crafting elegant and functional cupboards and wardrobes, seamlessly blending style and functionality. Enquire now.'/>
      </Helmet>
      <WhatsAppButton />
      <Cupboardhero
        handleOrderPopup={handleOrderPopup} />
      <Cupboardweprovidetext />
      <Cupboardweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Cupboard"} />
      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Cupboard 