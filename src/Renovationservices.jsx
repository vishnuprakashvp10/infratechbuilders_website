import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Renovationserviceshero from './components/Renovationservices/Renovationserviceshero'
import Renovationservicesweprovidetext from './components/Renovationservices/Renovationservicesweprovidetext'
import Renovationservicesweprovide from './components/Renovationservices/Renovationservicesweprovide'
import OurRenovationservices from './components/Renovationservices/OurRenovationservices'
import Renootherservices from './components/Renovationservices/Renootherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/living.jpg';
import Banner2 from './assets/Hero/kitchenren.jpg';
import Banner3 from './assets/Hero/bedroomren.jpg';
import Banner4 from './assets/Hero/bathroomren.jpg';
import Banner5 from './assets/Hero/roofren.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Renovationservices = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup); 
  };
  return (
        <div>
      <Helmet>
        <title>Renovation Contractors in Chennai &#124; Infratech Builders</title>
        <meta name='description' content="Renovate your property with Infratech Builders in Chennai, offering renovation solutions, functionality and aesthetics of your residential spaces. Enquire today." />
      </Helmet>
      <WhatsAppButton />
      <Renovationserviceshero
        handleOrderPopup={handleOrderPopup} />
      <Renovationservicesweprovidetext />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Living Room Renovation"
        description="Transform your living room in Chennai with our expert renovation services. As seasoned home improvement contractors and renovation builders, we bring creativity and precision to enhance your living space, ensuring a customized and stylish renovation experience."
      />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Kitchen Renovation"
        description="Elevate your living spaces in Chennai with our top-notch renovation services. As skilled kitchen remodel contractors and home improvement specialists, we bring creativity and expertise to transform your home, ensuring a customized and stylish renovation experience."
      />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Bedroom Renovation"
        description="Transform your bedroom in Chennai with our expert renovation services. As specialized small renovation contractors and skilled repair professionals, we revive and renovate old homes, ensuring quality and personalized transformation"
      />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Bathroom Renovation"
        description="Revitalize your bathroom in Chennai with our expert renovation services. As local bath remodeling contractors, we specialize in transforming small bathrooms. Trust us for personalized solutions and quality craftsmanship, ensuring your bathroom renovation reflects both style and functionality"

      />
      <Renovationservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Roof renovation"
        description="Transform your home roof in Chennai with our professional renovation services. Specializing in roof leakage repair and concrete roof slab water leak repair, we provide reliable solutions to ensure a waterproof and resilient roof, protecting your home from potential damage"
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Renovation Services"} />

      <OurRenovationservices />
      <Renootherservices />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Renovationservices 