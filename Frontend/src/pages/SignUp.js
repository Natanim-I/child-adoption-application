import React, { useState } from 'react'
import Footer from '../componenets/Footer';
import SignUp from '../componenets/SignUp';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"

const SignUpAdopter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <SignUp />
        <Footer />
    </>
  )
}

export default SignUpAdopter