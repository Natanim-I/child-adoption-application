import React, { useState } from "react";
import Footer from "../componenets/Footer";

import Navbar from "./../componenets/Navbar";
import Sidebar from "./../componenets/Sidebar";

import Donation from "./../componenets/Donation/Donate";

const Donate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Donation />

      <Footer />
    </>
  );
};

export default Donate;
