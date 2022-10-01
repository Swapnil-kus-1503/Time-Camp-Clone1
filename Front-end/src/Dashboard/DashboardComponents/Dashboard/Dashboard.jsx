import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../dashboard2/Header";
import { ScheduleComponent } from "../dashboard2/ScheduleComponent";
import TaskTimer from "../TaskTimer/TaskTimer";
import Sidebar from "./Sidebar";


const Dashboard = () => {
  return (
    <>

      <Flex>
        <Stack direction={['column', 'row']} spacing='24px'>
          <Box border="12px" h="700px" position="sticky">
            <Sidebar />
          </Box>
        </Stack>
        <Box w="85%">
          <Header />
          <ScheduleComponent />
          <TaskTimer />
        </Box>
      </Flex>








    </>
  );
};

export default Dashboard;
