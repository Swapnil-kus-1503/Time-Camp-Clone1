import React from 'react'
import EmployeeImage from '../HomeCompo/EmployeeImageCompo/EmployeeImage'
import Navbar from '../HomeCompo/Navbar/Navbar'
import TimeTrackingForEveryone from '../HomeCompo/TimeTrackingForEveryone/TimeTrackingForEveryone'
import TimeTrackingIntegrations from '../HomeCompo/TimeTrackingIntegrations/TimeTrackingIntegrations'
import WantAproductTour from '../HomeCompo/WantAProductTour/WantAproductTour'
import YourTimeCostsMore from '../HomeCompo/YourTimeCostsMore/YourTimeCostsMore'

function Home() {
    return (
        <div>

            <Navbar />

            <EmployeeImage />
            <TimeTrackingForEveryone />
            <WantAproductTour />
            <TimeTrackingIntegrations />
            <YourTimeCostsMore />
        </div>
    )
}

export default Home;
