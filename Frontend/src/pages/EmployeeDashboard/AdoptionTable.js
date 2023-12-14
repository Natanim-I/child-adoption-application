import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle } from './DashboardStyles'
import DashboardNavbar from "./../../componenets/EmployeeDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/EmployeeDashboard/DashboardSidebar'
import AdoptionTableView from "../../componenets/EmployeeDashboard/AdoptionTable"
import EmployeeMenubar from '../../componenets/EmployeeDashboard/EmployeeMenubar'


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
      <EmployeeMenubar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <DashboardNavbar toggleSidebar={toggleSidebar} toggleDarkTheme={toggleDarkTheme}/>
      <Container>
        <DashboardSidebar/>
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