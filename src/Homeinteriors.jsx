import React, { useState } from 'react';
import Homeinteriorshero from './components/Homeinteriorshero/Homeinteriorshero'
import Homeinteriorsweprovidetext from './components/Homeinteriorsweprovide/Homeinteriorsweprovidetext'
import Homeinteriorsweprovide from './components/Homeinteriorsweprovide/Homeinteriorsweprovide'
import Homeinteriorsotherservices from './components/Homeinteriorsweprovide/Homeinteriorsotherservices';
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner'
import Banner1 from './assets/Hero/livingroom.jpg';
import Banner2 from './assets/Hero/dinning.jpg';
import Banner3 from './assets/Hero/bedroom.jpg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';

const Homeinteriors = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };

  return (
    <div>
      <Helmet>
        <title>Home Interior Decorators in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders in Chennai crafts your vision with expertise in Building & Turf Construction, Interior Designing, Renovations and Painting. Get a quote today!' />
      </Helmet>
      <WhatsAppButton />
      <Homeinteriorshero
        handleOrderPopup={handleOrderPopup} />
      <Homeinteriorsweprovidetext />
      <Homeinteriorsweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Living Room Transformation"
        description="Revitalize your living spaces with a dedicated focus on inventive living area interiors. Whether your style leans towards minimalist decor or eclectic ideas, our expertise lies in crafting spaces that seamlessly fuse style and comfort. At our design hub, our aim is to curate personalized living interiors that mirror your unique taste and lifestyle, fostering an atmosphere that is both inviting and harmonious."
      />
      <Homeinteriorsweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Dining Room Elegance"
        description="Breathe new life into your dining spaces with contemporary and innovative decor concepts. Whether you have a cozy dining nook or a more spacious dining room, our designs bring a touch of sophistication to every dining space. Explore imaginative dining wall decor ideas that redefine the style within your home, adding charm and visual appeal to your dining experience."
      />
      <Homeinteriorsweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Bedroom Retreat"
        description="Enhance your bedrooms with creative decor concepts and inspiring ideas for bunk bed decoration. Our designs seamlessly blend stylish bedroom decorations with practical bunk bed solutions, creating a space that effortlessly combines comfort and aesthetics. Trust us to curate an environment that not only reflects your personality but also serves as a tranquil retreat within the sanctuary of your home."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Dining Room"} />

      <Exploredesigns />
      <Homeinteriorsotherservices />
      <Callusbanner />
    </div>
  );
}

export default Homeinteriors;
