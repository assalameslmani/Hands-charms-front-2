import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Shop from "../Components/Shop";
import Navbar from "../Components/Navbar";

const ShopScreen = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Shop/>
            <Footer/>
        </div>
    );
};

export default ShopScreen;