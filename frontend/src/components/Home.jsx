import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import HeroSection from "./HeroSection";
import CategorySection from "./categorySection";
import Carousel from "./Carousel";


function Home(){
    
    

    return (
        <>
        <Navbar/>
        <HeroSection/>
    <CategorySection/>
    <Carousel/>
        <Footer/>
        </>
    )
}


export default Home;