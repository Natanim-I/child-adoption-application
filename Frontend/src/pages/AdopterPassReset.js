import React, { useState } from 'react'

import Navbar from "../componenets/Navbar"
import Sidebar from "../componenets/Sidebar"
import PasswordRes from "../componenets/PasswordReset"
import Footer from '../componenets/Footer'

const AdopterPassReset = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <PasswordRes />
        <Footer />
    </>
  )
}

export default AdopterPassReset