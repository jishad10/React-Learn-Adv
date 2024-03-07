// create few pages -> Home.js, About.js, Contact.js, Error.js
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";

//basically browserRouter thakbe er modde routes, er modde route thakbe ,then path golo bole dibo ki search korle koi jabe
//element e page golo di e dibo
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;