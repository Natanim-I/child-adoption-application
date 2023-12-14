import React, { useState } from 'react'

import Navbar from "../componenets/Navbar"
import Sidebar from "../componenets/Sidebar"
import PasswordResAdmin from "../componenets/PasswordReset/AdminPassReset"
import Footer from '../componenets/Footer'

const AdminPassReset = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <PasswordResAdmin />
        <Footer />
    </>
  )
}

export default AdminPassReset