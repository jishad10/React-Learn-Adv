// Protected.js
import React from "react";
import { Navigate } from "react-router-dom";

//children bolte blog page ta ke bojacce jake protected korte cacchi
//jodi login na hoi taile replace ko re home page e ni e jabe
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;



// index.js - routing
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import About from '../pages/About';
import Blog from '../pages/Blog';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Protected from './Protected';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        //navbar er modde login ta set kore dicchi login korle logout page dekabe naile ulto ta dekabe
        //just blog page ta ke protected ko re dicchi
        //jate login korle oi blog page e jabe naile home page e jabe 
        <BrowserRouter>        
            <Navbar />
            <button
                onClick={() => {
                    setIsLoggedIn(!isLoggedIn);
                }}>
                {isLoggedIn ? 'logout' : 'login'}
            </button>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route
                    path="/blogs"
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <Blogs />
                        </Protected>
                    }
                />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

//export default Index;
