import React, { useState } from 'react';
import Constructionhero from './components/Constructionhero/Constructionhero'
import Constructionweprovidetext from './components/Constructionweprovide/Constructionweprovidetext'
import Constructionweprovide from './components/Constructionweprovide/Constructionweprovide'
import Constructionotherservices from './components/Constructionotherservices/Constructionotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import Banner1 from './assets/Hero/comm.jpg';
import Banner2 from './assets/Hero/residen.jpg';
import Banner3 from './assets/Hero/infra.jpg';
import OrderPopup from "./Popup";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';

const Construction = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>Residential & Home Constructors in Chennai &#124; Infratech Builders </title>
        <meta name='description' content='Infratech Builders in Chennai crafts your vision with expertise in Building & Turf Construction, Interior Designing, Renovations and Painting. Get a quote today!' />
      </Helmet>
      <WhatsAppButton />
      <Constructionhero
        handleOrderPopup={handleOrderPopup} />
      <Constructionweprovidetext />
      <Constructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner2}
        title="Residential Construction"
        quotes="“Crafting Dream Homes with Expertise”"
        description="Embark on the journey of building your dream home in Chennai with residential construction services tailored to your vision. From bathroom renovations to complete home constructions, collaborate with skilled Infratech builders and contractors. Create a haven that mirrors your style, combining functionality and aesthetics seamlessly.
        "
      />
      <Constructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner1}
        title="Commercial Construction"
        quotes="“Transforming Spaces for Business Success”"
        description="Infrastructure construction plays a vital role in shaping the future of communities. Engage with us, dedicated contractors and builders to contribute to the development of apartments and individual homes. Participate in projects that enhance connectivity, accessibility, and overall quality of life. Join the efforts to build the foundation for a sustainable and interconnected future."

      />
      <Constructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Infrastructure Construction"
        quotes="“Shaping Tomorrow's Landscape”"
        description="Infrastructure construction plays a vital role in shaping the future of communities. Engage with dedicated contractors and builders to contribute to the development of apartments and individual home. Participate in projects that enhance connectivity, accessibility, and overall quality of life. Join the efforts to build the foundation for a sustainable and interconnected future"
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Construction"} />
      <Constructionotherservices />
      <Exploredesigns />
      <Callusbanner />

    </div>
  )
}

export default Construction
