import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle } from './DashboardStyles'
import Menubar from '../../componenets/AdminDashboard/MenuBar'
import DashboardNavbar from "./../../componenets/AdminDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/AdminDashboard/DashboardSidebar'
import AdopterTableView from "../../componenets/AdminDashboard/AdopterTable"

const AdopterTable = () => {
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
      <Menubar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <DashboardNavbar toggleSidebar={toggleSidebar} toggleDarkTheme={toggleDarkTheme}/>
      <Container>
        <DashboardSidebar/>
        <DashboardHome>
            <br />
            <Tittle>Adopters</Tittle>
            <AdopterTableView />
        </DashboardHome>
      </Container>
    </StyledContainer>
  </>
  )
}

export default AdopterTable