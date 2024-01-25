import React from "react";
import Header from "./../Components/Header";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Wishlist = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header></Header>
            <Navbar/>
        </div>
    );
};

export default Wishlist;