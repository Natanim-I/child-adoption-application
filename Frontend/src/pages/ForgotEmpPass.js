import React, { useState } from 'react'
import Footer from '../componenets/Footer';
import ForgotEmp from '../componenets/ForgotPassword/ForgotEmp';

import Navbar from "../componenets/Navbar"
import Sidebar from "../componenets/Sidebar"

const ForgotEmpPass = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <ForgotEmp />
        <Footer />
    </>
  )
}

export default ForgotEmpPass