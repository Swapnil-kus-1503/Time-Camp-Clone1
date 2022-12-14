import React from "react";
import {
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  Flex,
  MenuDivider,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IoInformationCircleOutline, IoBookOutline } from "react-icons/io5";
import { BiMessage, BiHelpCircle } from "react-icons/bi";
import { CgGift } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { FaBullhorn } from "react-icons/fa";

export const Help = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={IconButton}
          variant="ghost"
          _hover={{ color: useColorModeValue("green.300", "green.700") }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <BiHelpCircle size={"2rem"} />
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>
            <Flex gap="0.5rem">
              <IoInformationCircleOutline size={"1.5rem"} />
              Help
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap="0.5rem">
              <IoBookOutline size={"1.5rem"} />
              Knowledge base
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap="0.5rem">
              <BiMessage size={"1.5rem"} />
              Send feedback
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap="0.5rem">
              <FiHeart size={"1.5rem"} />
              Become a partner
            </Flex>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Flex gap="0.5rem">
              <CgGift size={"1.5rem"} />
              What's new
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap="0.5rem">
              <FaBullhorn size={"1.5rem"} />
              Suggest a feature
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
