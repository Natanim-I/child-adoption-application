import React, { useState } from 'react'
import Footer from '../componenets/Footer';
import ForgotPassword from '../componenets/ForgotPassword';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"

const ForgotPass = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <ForgotPassword />
        <Footer />
    </>
  )
}

export default ForgotPass