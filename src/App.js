import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
