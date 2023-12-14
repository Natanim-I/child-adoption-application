import React, { useState } from 'react'

import { StyledContainer, Container } from './DashboardStyles'
import DashboardNavbar from "../../componenets/AdopterDashboard/DashboardNavbar"
import StageSubmitted from '../../componenets/AdopterDashboard/ApplicationSubmitted';

const ApplicationSubmit= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  }
  const [isDark, setIsDark] = useState(false);

  const toggleDarkTheme = () => {
      setIsDark(!isDark);
  }
  
  return (
      <>
        <StyledContainer isDark={isDark} toggleDarkTheme={toggleDarkTheme}>
            <DashboardNavbar toggleSidebar={toggleSidebar} toggleDarkTheme={toggleDarkTheme}/>
            <Container>
              <StageSubmitted />
          </Container>
        </StyledContainer>
      </>
  )
}

export default ApplicationSubmit;