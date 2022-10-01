import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";

import { Tooltip } from "@chakra-ui/tooltip";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FiCopy,
  FiPlus
} from "react-icons/fi";
import { addTask, getTasks } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { useNavigate } from "react-router-dom";
import StopTimer from "./StopTimer";
import Styles from "./TT.module.css"

const TaskTimer = () => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.AppReducer.tasks);
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (task) {
      const payload = {
        name: task,
        note: note,
      };

      dispatch(addTask(payload)).then((r) => dispatch(getTasks(r)));
    }
  };

  const handleEmptyTaskAdd = () => {
    const payload = {
      name: "",
      note: "",
      tag: "",
    };

    dispatch(addTask(payload)).then((r) => dispatch(getTasks(r)));
  };

  const handleSubmitApproval = () => {
    navigate("/");
  };
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <Box width="900px" mt="50px" ml={20}>
      <Box bgColor={"white"}>
        <Box m={"auto"} justifyContent={"center"}>
          <HStack
            mt={2}
            h={"70px"}
            w={"100%"}
            boxShadow={"0 0 10px 0 rgb(37 207 96 / 35%)"}
            border={"1px solid #4bb064"}
            borderRadius={10}
            p={2.5}
          >
            <input
              className={Styles.dashboardIP}
              placeholder="Select task and project"
             
              value={task}
              
              onChange={(e) => setTask(e.target.value)}
            ></input>

            <Spacer />
            <Input
              fontSize={14}
              placeholder="note"
              h={"40px"}
              w={"60px"}
              ml={2.5}
              variant="outline"
              border={"none"}
              _hover={{ border: "1px solid gray" }}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></Input>
            <Tooltip label="Add Task" placement="bottom-start" fontSize="md">
              <IconButton
                color={"gray"}
                bgColor={"white"}
                border={"1px solid gray"}
                borderRadius={7}
               
                _hover={{ bgColor: "#eaeaea" }}
                onClick={handleAddTask}
              ><FiPlus /></IconButton>
            </Tooltip>
            <Spacer />
         
            <StopTimer />
          </HStack>
          <Box>
            {tasks.length === 0 ? (
              <Box>
                <VStack justifyContent="center">
                  <Image
                    h={"300px"}
                    w={"250px"}
                    src={
                      "https://cdn.timecamp.com/res/css/images/timesheet-classic-empty-state.svg"
                    }
                  ></Image>
                  <Box ml={5} mt={-50}>
                    <Text fontSize={"24px"} fontWeight={500}>
                      No recent Time entries
                    </Text>
                  </Box>
                  <Box ml={5} mt={"-50px"}>
                    <Text fontSize={"14px"}>
                      Seems like you haven’t tracked any time yet
                    </Text>
                  </Box>
                </VStack>
              </Box>
            ) : (
              <Box mt={50} border={"1px solid gray"} borderRadius={10}>
                {tasks.length > 0 &&
                  tasks.map((task) => <Task task={task} key={task.id} />)}
              </Box>
            )}
          </Box>
          <HStack mt={"60px"}>
            <Tooltip
              label="new time entry"
              placement="bottom-start"
              fontSize="md"

            >
              <button
                style={{
                  color: "gray",
                  backgroundColor: "white",
                  border: "2px solid gray",
                  borderRadius: "10px",
                  padding: "6px",
                  height: "40px",
                  width: "40px"
                }}

                onClick={handleEmptyTaskAdd}
              >+</button>
            </Tooltip>
            <Tooltip
              label="entries from previous timesheets"
              placement="bottom-start"
              fontSize="md"
            >
              <button
                style={{
                  color: "gray",
                  backgroundColor: "white",
                  border: "2px solid gray",
                  borderRadius: "10px",
                  padding: "8px",
                  height: "40px",
                  width: "40px"
                }}

              ><FiCopy /></button>
            </Tooltip>
            <Spacer />
            <Button
              bgColor={"white"}
              color={"gray"}
              border={"1px solid gray"}
              onClick={handleSubmitApproval}
            >
              Submit for Approval
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskTimer;
