import React, {useState} from 'react'
import { StyledContainer, Container } from './DashboardStyles'
import DashboardNavbar from "../../componenets/AdopterDashboard/DashboardNavbar"
import AdoptionStage1 from "../../componenets/AdopterDashboard/NewAdoption/AdoptionStage1"

const Stage1 = () => {
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
              <AdoptionStage1 />
          </Container>
        </StyledContainer>
      </>
  )
}

export default Stage1