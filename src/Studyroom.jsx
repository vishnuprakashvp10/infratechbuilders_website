import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Studyroomhero from './components/Studyroom/Studyroomhero'
import Studyroomweprovidetext from './components/Studyroom/Studyroomweprovidetext'
import Studyroomweprovide from './components/Studyroom/Studyroomweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/study1.jpg';
import Banner2 from './assets/Hero/study2.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Studyroom = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup); 
  };
  return (
        <div>

      <Helmet>
        <title>Study Room Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders offers stylish & functional study room designs in Chennai at the best prices. Let our expert team create a personalized space for you. Call us!'/>
      </Helmet>
        <WhatsAppButton />
          <Studyroomhero
           handleOrderPopup={handleOrderPopup}/>
           <Studyroomweprovidetext/>
          <Studyroomweprovide
        handleOrderPopup={handleOrderPopup}
       img={Banner1}
        description="Explore our Exquisite Study Room Interior Designs at Infratech Builders, the leading name in study room interior design in Chennai. Our distinctive approach, meticulous attention to detail, and unwavering commitment to quality set us apart. Backed by a skilled team of interior designers, architects, draftsmen, 3D visualizers, administrators, and site supervisors, we ensure timely delivery and impeccable craftsmanship."
      />
      <Studyroomweprovide
         handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        description="As the premier choice for study room interior designing services, we excel in aligning your design preferences and style with perfect solutions. Our reputation as the top interior design company is built on creating lasting relationships with valued clients. Our dedicated interior decorators embrace every opportunity to bring dream homes and offices to life. At Infratech Decorators, we offer a comprehensive solution for all your interior designing needs, delivering unmatched expertise and a seamless experience. Trust us to transform your study room into a captivating and functional space that inspires productivity and creativity."
      />
         <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Study Room"} />
          <Exploredesigns/>
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default Studyroom