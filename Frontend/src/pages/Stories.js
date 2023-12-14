import React, { useState } from 'react'
import Footer from '../componenets/Footer';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"

const Stories = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <Footer />
    </>
  )
}

export default Stories