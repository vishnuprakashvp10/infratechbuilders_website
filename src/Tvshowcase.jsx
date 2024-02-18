import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Tvshowcasehero from './components/Tvshowcase/Tvshowcasehero'
import Tvshowcaseweprovidetext from './components/Tvshowcase/Tvshowcaseweprovidetext'
import Tvshowcaseweprovide from './components/Tvshowcase/Tvshowcaseweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/tv1.jpg';
import Banner2 from './assets/Hero/tv2.jpg';
import Banner3 from './assets/Hero/tv3.jpg';
import Banner4 from './assets/Hero/tv4.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'



const Tvshowcase = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>TV Showcase Designers in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Upgrade your home entertainment setup with elegant TV showcase designs by Infratech Builders in Chennai, combining form and function seamlessly. Enquire today!' />
      </Helmet>
      <WhatsAppButton />
      <Tvshowcasehero
        handleOrderPopup={handleOrderPopup} />
      <Tvshowcaseweprovidetext />
      <Tvshowcaseweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        description="Embark on a journey into the realm of tailored entertainment spaces with Infratech Builders, your primary destination for the most exquisite TV Showcase Designs in Chennai. Fueled by an unwavering commitment to innovative craftsmanship and a meticulous attention to detail, we have honed our expertise in the creation of personalized TV showcases that seamlessly amalgamate functionality with aesthetics."
      />
      <Tvshowcaseweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        description="The dedicated team at Infratech Builders comprises skilled designers, architects, and craftsmen who are passionately committed to fashioning distinct TV showcase solutions, enhancing the visual allure of your living spaces. Our diverse range encompasses contemporary and sleek designs, as well as timeless and ornate styles, ensuring each showcase is meticulously tailored to harmonize with your preferences and the overall ambiance of your home."
      />
      <Tvshowcaseweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        description="Recognizing the pivotal role of the TV showcase as a focal point in modern interiors, Infratech Builders is adept at delivering designs that cater to diverse tastes and lifestyles. Whether you aspire to achieve a minimalist look to augment a modern living room or yearn for a lavish showcase exuding classic charm, our designs are customized to resonate with your unique style and preferences."
      />
      <Tvshowcaseweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        description="Through the utilization of cutting-edge techniques and premium materials, Infratech Builders guarantees durability, precision, and a touch of sophistication in every TV showcase project. Entrust us with the task of transforming your living spaces into personalized entertainment hubs, where the seamless integration of functionality and design creates a harmonious and inviting atmosphere. Opt for Infratech Builders to embark on an unparalleled TV showcase design experience in Chennai, one that impeccably mirrors your distinctive style and preferences."
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Tv Showcase"} />

      <Exploredesigns />
      <Modularotherservices />
      <Callusbanner />
    </div>
  )
}

export default Tvshowcase