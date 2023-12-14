import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle } from './DashboardStyles'
import DashboardNavbar from "./../../componenets/AdopterDashboard/DashboardNavbar"
import AdoptionTableView from "../../componenets/AdopterDashboard/Adoptions"

const AdoptionTable = () => {
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
        <DashboardHome>
            <br />
            <Tittle>Adoptions</Tittle>
            <AdoptionTableView />
        </DashboardHome>
      </Container>
    </StyledContainer>
  </>
  )
}

export default AdoptionTable