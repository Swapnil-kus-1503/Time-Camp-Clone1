import { Box, Center, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TimeTrackingTextCompo from './TimeTrackingTextCompo'

function TimeTrackingForEveryone() {
    return (
        <div>
            <Center pt={"10"} >
                <Box textAlign={"center"}>
                    <Heading>Time tracking for everyone in your</Heading>
                    <Heading>organization</Heading>
                </Box>
            </Center>
            <SimpleGrid columns={["1", "1", "1", "2"]} p={["4", "10", "16", "28"]} gap="16">
                <TimeTrackingTextCompo forwhome={"FOR EMPLOYEES"} firstHeading="Track your" secondHeading={"employees"} thirdHeading="working time" littledes={"Log working hours of your employees automatically or manually and make sure they are billed fairly."} fourthHeading="Check logged time on the handly Timesheet" largestdes={"Enjoy the transparency - check your employees time records with more detailed information on the handy timesheet or a graphical, calendar-like view."} btnText="Track employees time" />
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.svg' ></Image>
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.svg'></Image>
                <TimeTrackingTextCompo forwhome={"FOR MANAGERS"} firstHeading="Track project time" secondHeading={"and budget easier"} thirdHeading="than ever before" littledes={"Stay on top of your team’s performance and create accurate resource estimates for all the projects."} fourthHeading="Ensure project profitability by analyzing reports" largestdes={"TimeCamp provides you with all the data you need to analyze the projects’ performance to ensure your team always stays on track. Look at the clear graphics and get a better view of the time tracked!"} btnText={"Increase team productivity"}></TimeTrackingTextCompo>
                <TimeTrackingTextCompo forwhome={"ENTERPRISE"} firstHeading="Try enterprise" secondHeading={"time tracking at"} thirdHeading="the highest level" littledes={"Custom needs? No problem! Contact us, and we will definitely find a perfect solution for your enterprise."} fourthHeading="Transfer miltilevel project structures" largestdes={"No matter how many projects your team is currently working on, with TimeCamp you'll be able to organize work time without any problem."} btnText="Contact for customized"></TimeTrackingTextCompo>
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.svg'></Image>
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.svg'></Image>
                <TimeTrackingTextCompo forwhome={"FOR HR"} firstHeading="Check Timesheets" secondHeading={"and second"} thirdHeading="attendence in one place" littledes={"With TimeCamp you can forget about endless stacks of papers! Take advantage of convenient and easy to use tools to support your daily HR and payroll work."} fourthHeading="Track attendence automatically" largestdes={"TimeCamp allows both you and your employees to keep an eye on their absence, sick days, or vacation leaves. Track attendance and working hours easily as never before."} btnText="Make HR's work easier"></TimeTrackingTextCompo>
            </SimpleGrid>
        </div>
    )
}

export default TimeTrackingForEveryone;
