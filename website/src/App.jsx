import React from "react";
import Header from "./components/header/Header";
import Hero from "./pages/homepage/hero/Hero";
import Home from "./pages/homepage/Home";

export default class App extends React.Component{
    render(){
        return(
            <>
            <Home/>
            </>
        );
    }
}