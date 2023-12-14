import React, {useState} from 'react'
import StoriesSection from "../componenets/StoriesSection"
import DonationSection from '../componenets/DonationSection';
import InfoSection from '../componenets/InfoSection';
import { InfoObjOne, InfoObjThree, InfoObjTwo } from '../componenets/InfoSection/Data';
import Welcome from '../componenets/WlcomeSection';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"
import Footer from '../componenets/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <Welcome />
        <InfoSection {...InfoObjOne} {...InfoObjTwo} {...InfoObjThree}/>
        <StoriesSection />
        <DonationSection />
        <Footer />
    </>
  )
}

export default Home