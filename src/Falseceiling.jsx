import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Falseceilinghero from './components/Falseceilinghero/Falseceilinghero'
import Falseceilingweprovidetext from './components/Falseceilingweprovide/Falseceilingweprovidetext'
import Falseceilingweprovide from './components/Falseceilingweprovide/Falseceilingweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/false1.jpg';
import Banner2 from './assets/Hero/false2.jpg';
import Banner3 from './assets/Hero/false3.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Falseceiling = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>False Ceiling Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Transform your Chennai space with stunning false ceiling designs, curated by expert interior designers for a touch of elegance and functionality. Call us today!' />
      </Helmet>
      <WhatsAppButton />
      <Falseceilinghero
        handleOrderPopup={handleOrderPopup} />
      <Falseceilingweprovidetext />
      <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        description="In the realm of sophisticated False Ceiling Interior Design, Infratech Builders stands as your foremost choice. Devoted to pioneering solutions and maintaining a standard of unparalleled quality, our expertise lies in the art of reshaping environments through tailor-made false ceiling designs. These designs are meticulously crafted to harmoniously integrate aesthetics and functionality, exemplifying our dedication to innovation and excellence in the field of interior design."
      />
      <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        description="Our team comprises skilled architects, designers, and craftsmen dedicated to crafting unique false ceiling solutions that elevate the ambiance of your home or office. At Infratech Builders, we understand the pivotal role false ceilings play in interior design, offering an opportunity for artistic expression and practical enhancement. Whether you envision a contemporary, minimalist aesthetic or desire a touch of opulence, we tailor our designs to suit your preferences and lifestyle"

      />
      <Falseceilingweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        description="Using cutting-edge techniques and premium materials, we ensure durability, visual appeal, and a timeless quality in every false ceiling project. Infratech Builders goes beyond conventional design boundaries, creating stunning false ceilings that redefine the character of your interior spaces. Trust us to bring your vision to life, adding a touch of sophistication, uniqueness, and architectural finesse to your living or working environment. Choose Infratech Builders for a transformative false ceiling experience that transcends expectations."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"False Ceiling"} />

      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Falseceiling