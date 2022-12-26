import React from "react";
// import Header from './header/Header'
import Hero from './hero/Hero'
import AboutUs from './about/AboutUs'
import Economica from './Economica/Economica'
import Team from './Team/Team'
// import Footer from './footer/Footer'

function Home() {
  return (
    <>
      {/* <Header/> */}
      <Hero/>
      <AboutUs/> 
      <Economica/>
      <Team/>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
