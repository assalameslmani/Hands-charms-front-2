import React from "react";
import {Link } from "react-router-dom";
import Header from "../Components/Header";

const Shipping = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return(
        <div>
            <Header/>
        </div>
    );
};
export default Shipping;