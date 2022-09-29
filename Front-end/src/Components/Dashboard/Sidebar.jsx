import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { TbChartPie } from "react-icons/tb";
import { BsFolder2Open } from "react-icons/bs";
import { BsTags } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Reports from "../Reports";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ setboxWidth, currComp }) => {
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    setToggle(!toggle);
    setboxWidth();
  };
const navigate = useNavigate();
  return (
    <Box
      h={"660px"}
      gap="20px"
      width={toggle ? "15%" : "27%"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      position={"sticky"}
      
    >
      <Box
        height={"16"}
        borderBottom="1px solid grey"
        display={"flex"}
        alignItems="center"
        gap={toggle ? "13px" : "22px"}
      >
        {toggle ? (
          <Image
            ml="4"
            height={"30px"}
            width="45%"
            src="https://i.pinimg.com/474x/6a/a4/b1/6aa4b1bd5dcccf6e84495731b9f483db.jpg"
          />
        ) : (
          <Image
            height={"60px"}
            width="85%"
            src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg "
          />
        )}
        <Box
          onClick={handleChange}
          _hover={{ cursor: "pointer" }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          height="30px"
          width={"30px"}
          borderRadius="50%"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          position="relative"
          marginRight={"-40px"}
        >
          {toggle ? <AiOutlineRight /> : <AiOutlineLeft />}
        </Box>
      </Box>

      <Link to="">
        <Box
          height={"24"}
          width="100%"
          borderBottom={"1px solid grey"}
          alignContent="center"
          p="4"
          mb="20px"
        >
          <Text
            fontSize={"13px"}
            w={toggle ? null : "50%"}
            textAlign="center"
            fontWeight="semibold"
            color={"gray.400"}
          >
            TRACK
          </Text>
          <Flex
            width={"80%"}
            mt={toggle ? "2" : "4"}
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            m={2}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BiTimeFive
              size={"25px"}
              color={currComp == "TimeSheet" ? "#25cf60" : "gray"}
            
            />
            {toggle ? null : (
              <Text
                fontSize={"15px"} color={"#25cf60"}
                
                fontWeight="semibold"
              >
                Timesheet
              </Text>
            )}
          </Flex>
        </Box>
      </Link>

      <Box
        height={"40"}
        width="100%"
        borderBottom={"1px solid grey"}
        alignContent="center"
        p="4"
      >
        <Text
          fontSize={toggle ? "10px" : "13px"}
          w={toggle ? null : "50%"}
          textAlign="center"
          fontWeight="semibold"
          color={"gray.400"}
        >
          ANALYZE
        </Text>

        <Flex
          width={"88%"}
          mt="2"
          justifyContent="center"
          height={"30px"}
          alignItems={"center"}
          gap={"20px"}
        >
          {toggle ? (
            <TbChartPie size={"25px"} color="gray" />
          ) : (
            <Reports toggle={toggle} />
          )}
        </Flex>
        <Flex
          width={"100%"}
          mt="2"
          justifyContent="center"
          _hover={{
            cursor: "pointer",
            backgroundColor: "#f8f8f8",
            borderRadius: "7px",
          }}
          height={"50px"}
          alignItems={"center"}
          gap={"10px"}
        ></Flex>
      </Box>

      <Box
        height={"48"}
        width="100%"
        borderBottom={"1px solid grey"}
        alignContent="center"
        p="4"
        mb={2}
        
      >
        <Text
          fontSize={toggle ? "10px" : "13px"}
          w={toggle ? null : "50%"}
          textAlign="center"
          fontWeight="semibold"
          color={"gray.400"}
        >
          MANAGE
        </Text>

        <Link to="">
          <Flex
            width={"70%"}
            mt="2"
            onClick={() => navigate("/projects")}
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsFolder2Open
              size={"25px"}
              color={currComp == "Projects" ? "#25cf60" : "gray"}
            />
            {toggle ? null : (
              <Text
                fontSize={"15px"}
                color={currComp == "Projects" ? "#25cf60" : "gray"}
                fontWeight="semibold"
              >
                Projects
              </Text>
            )}
          </Flex>
        </Link>

        <Link to="">
          <Flex
            width={"60%"}
            justifyContent="center"
            onClick={() => navigate("/tags")}
            mt="2"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsTags
              size={"25px"}
              color={currComp == "Tags" ? "#25cf60" : "gray"}
            />
            {toggle ? null : (
              <Text
                fontSize={"15px"}
                color={currComp == "Tags" ? "#25cf60" : "gray"}
                fontWeight="semibold"
                pb="5px"
              >
                Tags
              </Text>
            )}
          </Flex>
        </Link>
      </Box>

      <Box height={"36"} width="100%" alignContent="center" p="4">
        <Text
          fontSize={"13px"}
          w={toggle ? null : "50%"}
          textAlign="center"
          fontWeight="semibold"
          color={"gray.400"}
        >
          TEAM
        </Text>
        <Link to="">
          <Flex
            width={"70%"}
            mt="2"
            justifyContent="center"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#f8f8f8",
              borderRadius: "7px",
            }}
            height={"40px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <FiUsers
              size={"25px"}
              color={currComp == "Users" ? "#25cf60" : "gray"}
            />
            {toggle ? null : (
              <Text
                fontSize={"15px"}
                color={currComp == "Users" ? "#25cf60" : "gray"}
                fontWeight="semibold"
              >
                CLIENTS
              </Text>
            )}
          </Flex>
        </Link>
        <Flex
          width={"85%"}
          mt="2"
          justifyContent="center"
          _hover={{
            cursor: "pointer",
            backgroundColor: "#f8f8f8",
            borderRadius: "7px",
          }}
          height={"40px"}
          alignItems={"center"}
          gap={"20px"}
        >
          <AiOutlineCheckSquare size={"25px"} color="gray" />
          {toggle ? null : (
            <Text fontSize={"15px"} color="gray" fontWeight="semibold">
              Invoices
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
