import React from 'react';
import './App.css';
import "./responsive.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import Singleproduct from "./screens/Singleproduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import Shipping from "./screens/Shipping";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import Notfound from "./screens/Notfound";
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ShopScreen from './screens/ShopScreen';
import Wishlist from './screens/Wishlist';
import AdminScreen from "./screens/AdminScreen";
import SellerScreen from "./screens/SellerScreen";
import ProductSScreen from "./screens/ProductSScreen";
import OrderSScreen from './screens/OrderSScreen';
import UserAScreen from './screens/UserAScreen';
import ProductAScreen from "./screens/ProductAScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Products/:id" element={<Singleproduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<CartScreen />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Payment" element={<PaymentScreen />} />
        <Route path="/PlaceOrder" element={<PlaceOrderScreen />} />
        <Route path="/Order" element={<OrderScreen />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/About" element={<AboutScreen />} />
        <Route path="/Contact" element={<ContactScreen />} />
        <Route path='/Shop' element={<ShopScreen/>} />
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path='/SellerDash' element={<SellerScreen/>}/>
        <Route path='/AdminDash' element={<AdminScreen/>}/>
        <Route path='/ProductS' element={<ProductSScreen/>}/>
        <Route path='/OrderS' element={<OrderSScreen/>}/>
        <Route path='/UserA' element={<UserAScreen/>}/>
        <Route path='/ProductA' element={<ProductAScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
