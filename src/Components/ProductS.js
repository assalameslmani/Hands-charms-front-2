import React from "react";
import itemimg from "../images/braceletb.jpg"

const ProductS= () => {

    return(
        <div className="ProductS">
            <h1>WELCOME TO YOUR DASHBOARD!</h1>
            <div className="Items-dash">
                <img src={itemimg} className="itemimg"/>
                <p className="itemname">Item:<br/>Bracelet</p>
                <p className="priceitem">Price:<br/>18$</p>
                <p>Quantity:<br/>24</p>
                <p>Discount:<br/>0%</p>
                <div className="buttns"> 
                    <button className="login-btn">EDIT</button>
                    <br/>
                    <button className="login-btn">DELETE</button>
                </div>
            </div>
            <button className="login-btn">ADD NEW ITEM</button>
        </div>

    );
};

export default ProductS;