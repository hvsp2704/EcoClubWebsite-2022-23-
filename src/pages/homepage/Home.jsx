import React from "react";
import Header from "./header/Header";
import AboutUs from "./About/AboutUs";
import Economica from "./Economica/Economica";
import Hero from "./hero/Hero";

export default class Home extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Hero/>
            <AboutUs/>
            <Economica/>
            </>
        )
    }
}
