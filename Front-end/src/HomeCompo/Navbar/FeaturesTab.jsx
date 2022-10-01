import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBarChartLine, BsCalendarCheck } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
// import {IoServerOutline } from "react-icons/io";
import { IoServerOutline } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
export default function Features() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          varient="ghost"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          // border="none"

          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          backgroundColor="white"
          _hover={{ color: "green", background: "white" }}
          p={0}
          onClick={() => navigate("/time-tracking")}
        >
          Features
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/automatic-time-tracking")}
          >
            <Flex alignItems={"center"}>
              <AiOutlineClockCircle size={"20px"} />
              <Text ml={5}>Automatic time tracking</Text>
            </Flex>
          </MenuItem>

          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/reporting")}
            >
            <Flex alignItems={"center"}>
              <BsBarChartLine size={"20px"} />
              <Text ml={5}>Reporting</Text>
            </Flex>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/productivity-tracking")}
            >
            <Flex alignItems={"center"}>
              <FcStatistics size={"20px"} />
              <Text ml={5}>Productivity tracking</Text>
            </Flex>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/rapid-timesheet-approvals")}
            >
            <Flex alignItems={"center"}>
              <BsCalendarCheck size={"20px"} />
              <Text ml={5}>Timesheet approvals</Text>
            </Flex>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/invoicing")}
            >
            <Flex alignItems={"center"}>
              <IoServerOutline size={"20px"} />
              <Text ml={5}>Invoicing</Text>
            </Flex>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/billing")}
            >
            <Flex alignItems={"center"}>
              <RiMoneyDollarBoxLine size={"20px"} />
              <Text ml={5}>Billing rates and budgeting</Text>
            </Flex>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "rgb(37,207,96)",
              color: "white",
            }}
            onClick={() => navigate("/time-tracking/attendance")}
          >
            <Flex alignItems={"center"}>
              <GiPathDistance size={"20px"} />
              <Text ml={5}>Time off & attendence</Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
