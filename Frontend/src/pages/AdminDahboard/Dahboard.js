import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle } from './DashboardStyles'
import DashboardNavbar from "./../../componenets/AdminDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/AdminDashboard/DashboardSidebar'
import Menubar from '../../componenets/AdminDashboard/MenuBar'
import Widget from '../../componenets/AdminDashboard/Widget'
import EmployeeTableOverview from '../../componenets/AdminDashboard/EmployeeOverview'
import AdopterTableOverview from '../../componenets/AdminDashboard/AdopterOverview'
import AdoptionTableOverview from '../../componenets/AdminDashboard/AdoptionOverview'
import DonationTableOverview from '../../componenets/AdminDashboard/DonationOverview'

const Dashboard = () => {
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
                <Widget />
                <br />
                <Tittle>Employee</Tittle>
                <EmployeeTableOverview />
                <br />
                <Tittle>Adopter</Tittle>
                <AdopterTableOverview />
                <br />
                <Tittle>Adoptions</Tittle>
                <AdoptionTableOverview />
                <br />
                <Tittle>Donations</Tittle>
                <DonationTableOverview />
            </DashboardHome>
          </Container>
        </StyledContainer>
      </>
  )
}

export default Dashboard