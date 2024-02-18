import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Turfconstructionhero from './components/Turfconstruction/Turfconstructionhero'
import Turfconstructionweprovidetext from './components/Turfconstruction/Turfconstructionweprovidetext'
import Turfconstructionweprovide from './components/Turfconstruction/Turfconstructionweprovide'
import Turfotherservices from './components/Turfconstruction/Turfotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/footballturf.jpg';
import Banner2 from './assets/Hero/crickturf.jpg';
import Banner3 from './assets/Hero/tennisturf.jpg';
import Banner4 from './assets/Hero/badmin.jpg';
import Banner5 from './assets/Hero/volly.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async'



const Turfconstruction = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
    <div>
      <Helmet>
        <title>Multi-Turf Constructions in Chennai &#124; Infratech Builders</title>
        <meta name='description' content='Infratech Builders turns your vision into reality, crafting top-quality sports turf for cricket, football, tennis, badminton, and more across Chennai. Enquire today.' />
      </Helmet>
      <WhatsAppButton />
      <Turfconstructionhero
        handleOrderPopup={handleOrderPopup} />
      <Turfconstructionweprovidetext />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Football Turf Construction"
        description="From natural grass to artificial turf, Infratech Builders seamlessly constructs world-class football fields that meet the highest standards of playability and durability. Our team of experts meticulously designs and executes every aspect of the project, ensuring that your football field is not only visually stunning but also ready for countless matches and training sessions."
        description2="Whether you prefer the natural resilience of grass or the low-maintenance elegance of artificial turf, Infratech Builders has the expertise to bring your vision to life. We'll work closely with you to understand your needs and preferences, ensuring that your football field becomes an integral part of your community's athletic landscape."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Cricket Turf Construction"
        description="Infratech Builders is a leading construction company that specializes in the construction of high-quality cricket pitches. We use the latest technology and materials to ensure that our cricket pitches are durable and playable year-round."
        description2="Our cricket pitches are designed to meet the highest standards of playability and safety. We use only the finest quality materials, including high-density sand, topsoil, and turf. Our pitches are also designed to drain well, ensuring that they are playable even after heavy rain."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Tennis Turf Construction"
        description="Infratech Builders stands at the forefront of tennis turf construction, specializing in the creation of premier tennis courts."
        description2="With a commitment to excellence, Infratech Builders transforms tennis spaces into world-class facilities, offering players top-tier surfaces that elevate their game. Trust us for cutting-edge tennis turf construction that exceeds expectations in durability, playability, and visual appeal."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Badminton Turf Construction"
        description="Infratech Builders leads the way in badminton turf construction, providing unmatched expertise in sports pitch construction. As turf contractors with a commitment to excellence, we specialize in transforming spaces with precision and quality."
        description2="Our comprehensive services encompass all aspects of sports turf construction, ensuring top-tier surfaces that meet the highest standards. For a reliable turf general contracting partner, Infratech Builders stands out, delivering exceptional results in building turf for optimal badminton play."
      />
      <Turfconstructionweprovide
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Volleyball Turf Construction"
        description="Experience the pinnacle of volleyball turf construction with Infratech Builders. Our meticulous craftsmanship and expertise ensure top-tier playing surfaces, transforming your court into a haven for volleyball excellence. Choose us for unparalleled design, construction, and performance, elevating your volleyball experience to new heights."
        description2=""
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Turf Construction"} />
      <Turfotherservices />
      <Exploredesigns />
      <Callusbanner />
    </div>
  )
}

export default Turfconstruction