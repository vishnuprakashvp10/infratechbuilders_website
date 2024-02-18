import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Poojaroomhero from './components/Poojaroom/Poojaroomhero'
import Poojaroomweprovidetext from './components/Poojaroom/Poojaroomweprovidetext'
import Poojaroomweprovide from './components/Poojaroom/Poojaroomweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/pooja1.jpg';
import Banner2 from './assets/Hero/poojatwo.jpg';
import Banner3 from './assets/Hero/pooja3.jpg';
import Banner4 from './assets/Hero/pooja4.jpg';
import WhatsAppButton from './whatsappbutton';
import Callusbanner from './components/Callusbanner/Callusbanner';
import { Helmet } from 'react-helmet-async'

const Poojaroom = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>Pooja Room Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Create a beautifully crafted pooja room for prayer & meditation in your home with Infratech Builders elegant designs crafted with devotion. Call now!' />
      </Helmet>
      <WhatsAppButton />
      <Poojaroomhero
        handleOrderPopup={handleOrderPopup} />
      <Poojaroomweprovidetext />
      <Poojaroomweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        description="Embark on a spiritual journey within your home with Infratech Builders, your premier choice for Pooja Room Interior Designers in Chennai. With a profound understanding of the cultural significance and personal sanctity of Pooja rooms, we specialize in creating divine spaces that harmonize spirituality with aesthetic elegance."
      />
      <Poojaroomweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        description="At Infratech Builders, our team of experienced designers, architects, and craftsmen collaborates seamlessly to craft bespoke Pooja Room interiors. We meticulously consider every aspect, from sacred geometry to traditional motifs, ensuring that the design resonates with your religious and cultural preferences."
      />
      <Poojaroomweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        description="Our Pooja Room designs transcend the ordinary, blending contemporary styles with timeless spiritual aesthetics. Whether you envision a compact, minimalist setup or a grand, ornate sanctuary, our designs are tailored to your spiritual and design preferences."
      />
      <Poojaroomweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        description="Infratech Builders takes pride in using high-quality materials and innovative techniques, ensuring durability and a timeless allure in every Pooja Room project. Trust us to transform your Pooja Room into a sacred haven that not only reflects your devotion but also adds a touch of serenity and divine beauty to your home. Choose Infratech Builders for an unmatched Pooja Room interior design experience in Chennai, where spirituality meets sophisticated design seamlessly."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Pooja Room"} />

      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Poojaroom