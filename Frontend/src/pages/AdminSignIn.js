import React, { useState } from 'react'
import Footer from '../componenets/Footer';
import AdminSignIn from '../componenets/SignIn/AdminSignIn';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"

const SignInAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <AdminSignIn />
        <Footer />
    </>
  )
}

export default SignInAdmin