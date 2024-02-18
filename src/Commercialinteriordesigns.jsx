import React, { useState } from 'react';
import Commercialhero from './components/Commercial/Commercialhero'
import Commercialweprovidetext from './components/Commercial/Commercialweprovidetext'
import Commercialweprovide from './components/Commercial/Commercialweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner'
import Banner1 from './assets/Hero/comone.jpg';
import Banner2 from './assets/Hero/comtwo.jpg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';

const Homeinteriors = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };

  return (
    <div>

      <WhatsAppButton />
      <Commercialhero
        handleOrderPopup={handleOrderPopup} />
      <Commercialweprovidetext />
      <Commercialweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="How We Handle?"
        description="We understand our clients' needs and aim to surpass expectations with each project. Our approach to commercial interior design starts with understanding your vision, objectives, and brand identity. With our experienced team of architects and designers, we collaborate closely to bring your vision to life, creating inspiring environments that foster productivity and leave a lasting impression on clients and visitors."
      />
      <Commercialweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Why Choose Us?"
        description="Whether optimizing space utilization, integrating cutting-edge technology, or implementing sustainable practices, we deliver innovative solutions that exceed expectations. At Infratech Builders, we build experiences resonating with your audience, elevating your brand presence. Partner with us to transform your commercial space into a reflection of your aspirations."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Commercial Interior Designs"} />

      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  );
}

export default Homeinteriors;
