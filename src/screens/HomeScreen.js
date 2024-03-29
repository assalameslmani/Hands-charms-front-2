import React from "react";
import Header from "../Components/Header";
import Miniabout from "../Components/homeComponents/Miniabout";
import Section2 from "../Components/homeComponents/Section2";
import Collection from "../Components/homeComponents/Collection";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Miniabout />
            <Section2 />
            <Collection/>
            <Footer/>
        </div>
    );
};

export default HomeScreen;