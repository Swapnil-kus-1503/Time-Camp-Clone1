import React from 'react'
import EmployeeImage from '../HomeCompo/EmployeeImageCompo/EmployeeImage'
import Navbar from '../HomeCompo/Navbar/Navbar'
import SSLUseTimeCamp from '../HomeCompo/SSLUseTimeCamp/SSLUseTimeCamp'
import TimeTrackingForEveryone from '../HomeCompo/TimeTrackingForEveryone/TimeTrackingForEveryone'
import TimeTrackingIntegrations from '../HomeCompo/TimeTrackingIntegrations/TimeTrackingIntegrations'
import WantAproductTour from '../HomeCompo/WantAProductTour/WantAproductTour'
import YourTimeCostsMore from '../HomeCompo/YourTimeCostsMore/YourTimeCostsMore'
import FAQCompo from "../HomeCompo/FAQ/FAQCompo"
import SocialProof from '../components/timeTracker/SocialProof'
import Blog from '../HomeCompo/Blogs/Blog'
import Footer from '../HomeCompo/Footer/Footer'
function Home() {
  return (
    <div>

      <Navbar />
      <EmployeeImage />
      <SocialProof />
      <TimeTrackingForEveryone />
      <WantAproductTour />
      <TimeTrackingIntegrations />
      <YourTimeCostsMore />
      <SSLUseTimeCamp />
      <FAQCompo />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home;
