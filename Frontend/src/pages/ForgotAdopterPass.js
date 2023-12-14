import React, { useState } from 'react'
import Footer from '../componenets/Footer';
import ForgotAdopter from '../componenets/ForgotPassword/ForgotAdopter';

import Navbar from "../componenets/Navbar"
import Sidebar from "../componenets/Sidebar"

const ForgotAdopterPass = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <ForgotAdopter />
        <Footer />
    </>
  )
}

export default ForgotAdopterPass