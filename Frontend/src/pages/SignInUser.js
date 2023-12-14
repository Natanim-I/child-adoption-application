import React, { useState } from 'react'

import Navbar from "../componenets/Navbar"
import Sidebar from "../componenets/Sidebar"
import SignIn from "../componenets/SignIn"
import Footer from '../componenets/Footer'

const SignInUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <SignIn />
        <Footer />
    </>
  )
}

export default SignInUser