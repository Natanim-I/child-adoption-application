import React, { useState } from 'react'
import Footer from '../componenets/Footer';
import EmployeeSignIn from '../componenets/SignIn/EmployeeSignIn';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"

const SignInEmployee = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <EmployeeSignIn />
        <Footer />
    </>
  )
}

export default SignInEmployee