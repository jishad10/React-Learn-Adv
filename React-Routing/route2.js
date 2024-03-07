import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";

//navbar create kortechi bcz home,about ey golo te click korle jate oi page golo te nie jai..link ko re dicchi
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/about" className="nav__link">
            About
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </nav>
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

//export default App;

// create a separate Navbar.js component inside layout folder
// Active Link
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className="nav__link">
                Home
            </NavLink>
            <NavLink to="/about" className="nav__link">
                About
            </NavLink>
            <NavLink to="/contact" className="nav__link">
                Contact
            </NavLink>
        </nav>
    );
};

/*
export default Navbar;
.active {
    color: orange;
}
*/