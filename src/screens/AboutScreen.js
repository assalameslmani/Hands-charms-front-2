import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Navbar from "../Components/Navbar";

const AboutScreen = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    );
};

export default AboutScreen;