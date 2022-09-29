import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TimeTrackingTextCompo from './TimeTrackingTextCompo'

function TimeTrackingForEveryone() {
    return (
        <div>
            <SimpleGrid columns={["1", "1", "1", "2"]} p={"28"} gap="16">
                <TimeTrackingTextCompo forwhome={"FOR EMPLOYEES"} firstHeading="Track your" secondHeading={"employees"} thirdHeading="working time" littledes={"Log working hours of your employees automatically or manually and make sure they are billed fairly."} fourthHeading="Check logged time on the handly Timesheet" largestdes={"Enjoy the transparency - check your employees time records with more detailed information on the handy timesheet or a graphical, calendar-like view."} btnText="Track employees time" />
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.svg' ></Image>
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.svg'></Image>
                <TimeTrackingTextCompo forwhome={"FOR MANAGERS"} firstHeading="Track project time" secondHeading={"and budget easier"} thirdHeading="than ever before" littledes={"Stay on top of your team’s performance and create accurate resource estimates for all the projects."} fourthHeading="Ensure project profitability by analyzing reports" largestdes={"TimeCamp provides you with all the data you need to analyze the projects’ performance to ensure your team always stays on track. Look at the clear graphics and get a better view of the time tracked!"} btnText={"Increase team productivity"}></TimeTrackingTextCompo>
            </SimpleGrid>
        </div>
    )
}

export default TimeTrackingForEveryone