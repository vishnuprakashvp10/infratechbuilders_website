import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Livingroomhallhero from './components/Livingroomhallhero/Livingroomhallhero'
import Livingroomhallweprovidetext from './components/Livingroomhallweprovide/Livingroomhallweprovidetext'
import Livingroomhallweprovide from './components/Livingroomhallweprovide/Livingroomhallweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import { Helmet } from 'react-helmet-async'


const Livingroomhall = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>

      <Helmet>
        <title>Living Room Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Discover the art of living in Chennai with Infratech Builders, where inviting living spaces are crafted by our designers for your ultimate comfort. Enquire today!' />
      </Helmet>
      <WhatsAppButton />
      <Livingroomhallhero
        handleOrderPopup={handleOrderPopup} />
      <Livingroomhallweprovidetext />
      <Livingroomhallweprovide
        handleOrderPopup={handleOrderPopup} />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Living Room"} />

      <Exploredesigns />

      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Livingroomhall