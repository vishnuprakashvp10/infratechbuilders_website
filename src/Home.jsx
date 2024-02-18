import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Herocard from './components/Hero/Herocard';
import Servicesoffertext from './components/Servicesoffer/Servicesoffertext';
import Servicesoffer from './components/Servicesoffer/Servicesoffer';
import Exploredesigns from './components/Exploredesigns/Exploredesigns';
import Callusbanner from './components/Callusbanner/Callusbanner';
import OrderPopup from "./Popup";
import Banner1 from './assets/Hero/homec.jpg';
import Banner2 from './assets/Hero/interd.jpg';
import Banner3 from './assets/Hero/turfc.jpg';
import Banner4 from './assets/Hero/renovation.jpg';
import Banner5 from './assets/Hero/paintingserv.jpg';
import { Link } from "react-router-dom";
import WhatsAppButton from './whatsappbutton';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };

  return (
    <>
      <Helmet>
        <title>Infratech Builders &#124; Constructions & Interior Designers, Chennai</title>
        <meta name='description' content='Infratech Builders in Chennai crafts your vision with expertise in Building & Turf Construction, Interior Designing, Renovations and Painting. Get a quote today!'/>
      </Helmet>
      <WhatsAppButton />
      <Hero />
      <Herocard />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        img={Banner1}
        title="Home Construction"
        description="Infratech Builders is a top-tier construction company, excelling as expert Builders, Construction Managers, and Contractors across diverse projects. Renowned Home Builders, Infratech blends precision and innovation for outstanding results, earning client trust through a commitment to quality and timely delivery. From residential to commercial ventures, Infratech Builders consistently exceeds expectations, setting the standard for excellence in construction."
        description2={<Link to="/construction"> Find out more!</Link>}
      />


      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        title="Interior Design"
        description="Infratech Builders, a leading interior designing company, specializes in crafting exquisite interiors for 1 BHK to 3 BHK residences and houses. With a keen focus on House and Home interiors, Infratech Builders transforms spaces into personalized havens, paying special attention to Kitchen and Bedroom interiors. Our expertise extends beyond residential areas, as we also excel in optimizing commercial spaces, creating captivating restaurant interiors. With a commitment to blending aesthetics and functionality, Infratech Builders elevates interior design to new heights, ensuring every project reflects the unique style and needs of their clients."
        description2={<Link to="/overview-home-interiors"> Learn more.</Link>}
      />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        img={Banner3}
        title="Turf construction"
        description="Infratech Builders excels in the specialized field of turf construction, serving as premier turf contractors for a range of projects. With expertise in football turf construction and Multi-sports turf development, Infratech Builders brings precision and innovation to the field. As leaders in turf building, they prioritize creating durable and high-quality surfaces tailored to the unique demands of sports. Whether for recreational or professional use, Infratech Builders is the trusted choice for delivering top-notch solutions in the realm of turf construction. "
        description2={<Link to="/multi-turf-construction">Find out more!</Link>}
      />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner4}
        title="Renovation services"
        description="Infratech Builders specializes in comprehensive renovation solutions, addressing a spectrum of issues such as leakage repair and dampness treatment. With a focus on repair, renovation, and remodeling, Infratech Builders offers a holistic approach to enhancing living spaces. Our expertise extends to specific concerns like roof leakage repair and wall treatment, ensuring a thorough and lasting solution. As a trusted construction company, Infratech Builders is dedicated to revitalizing homes through effective repairs and renovations. "
        description2={<Link to="/renovation-services">Discover more!</Link>}
      />
      <Servicesoffer
        handleOrderPopup={handleOrderPopup}
        img={Banner5}
        title="Painting services"
        description="Infratech Builders stands as a reliable choice for all your painting needs, offering expert services in both interior and exterior painting. With proficiency in industrial painting, Infratech Builders ensures a professional touch for diverse projects, whether internal or external. From revitalizing homes with affordable house painting to providing high-quality commercial painting solutions, their skilled team excels in delivering top-notch results. Count on Infratech Builders for comprehensive and cost-effective painting services, setting a standard of excellence in the construction industry. "
        description2={<Link to="/painting-services">Explore more!</Link>}
      />
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Home Page"} />
      <Exploredesigns />
      <Callusbanner />

    </>
  );
};

export default Home;
