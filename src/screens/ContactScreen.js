import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

const ContactScreen = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default ContactScreen;