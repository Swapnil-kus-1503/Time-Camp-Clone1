import React from 'react'
import EmployeeImage from '../HomeCompo/EmployeeImageCompo/EmployeeImage'
import Navbar from '../HomeCompo/Navbar/Navbar'
import TimeTrackingForEveryone from '../HomeCompo/TimeTrackingForEveryone/TimeTrackingForEveryone'

function Home() {
    return (
        <div>
            <Navbar />
            <EmployeeImage />
            <TimeTrackingForEveryone />
        </div>
    )
}

export default Home