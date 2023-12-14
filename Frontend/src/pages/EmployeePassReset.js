import React, { useState } from 'react'

import Navbar from "../componenets/Navbar"
import Sidebar from "../componenets/Sidebar"
import PasswordResEmp from "../componenets/PasswordReset/EmployeePassReset"
import Footer from '../componenets/Footer'

const EmployeePassReset = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <PasswordResEmp />
        <Footer />
    </>
  )
}

export default EmployeePassReset