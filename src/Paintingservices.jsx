import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Paintingserviceshero from './components/Paintingservices/Paintingserviceshero'
import Paintingservicesweprovidetext from './components/Paintingservices/Paintingservicesweprovidetext'
import Paintingservicesweprovide from './components/Paintingservices/Paintingservicesweprovide'
import Ourpaintingservices from './components/Paintingservices/Ourpaintingservices'
import Paintotherservices from './components/Paintingservices/Paintotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/paintingext.jpg';
import Banner2 from './assets/Hero/extpaintingnew.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'

const Paintingservices = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>

      <Helmet>
        <title>Painting Contractors in Chennai &#124; Infratech Builders</title>
        <meta name='description' content="Transform your space with a fresh coat of paint from Infratech Builders, Chennai's leading painters offering interior & exterior painting services. Enquire today." />
      </Helmet>
      <WhatsAppButton />
      <Paintingserviceshero
        handleOrderPopup={handleOrderPopup} />
      <Paintingservicesweprovidetext />
      <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Interior Painting"
        description="Revitalize your interiors with our dedicated team of professional interior painters. As a trusted name among interior painting companies, we specialize in commercial and residential projects. Whether you need local painters for homes or commercial spaces, our interior painting business is committed to delivering top-notch services, ensuring vibrant and polished results."
        description2="Our professional interior painters offer comprehensive apartment painting services, catering to local home and building needs. With a focus on quality, our pro painting services transform spaces, providing unmatched home and building painting services. Trust us for precision and excellence in every brushstroke, enhancing your interiors with a fresh and professional finish."

      />
      <Paintingservicesweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Exterior Painting"
        description="Enhance your home's curb appeal with our professional exterior painting services. As local painters close to you, we deliver top-notch results. Our team of pro house painters, skilled in exterior house painting, is committed to excellence, offering affordable services that transform the look of your home. Find reliable and affordable exterior house painters in your area for a fresh and vibrant appearance."
        description2="Discover the best painting services with us, featuring a team of skilled painters close to you. As pro painting contractors, we ensure quality craftsmanship and competitive quotes. Our affordable exterior house painters specialize in transforming homes, providing exceptional service. Choose us for reliable and budget-friendly exterior painting solutions that leave your home looking revitalized."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Painting Services"} />

      <Ourpaintingservices />
      <Paintotherservices />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Paintingservices