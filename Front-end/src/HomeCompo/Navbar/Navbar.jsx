import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Image,
  Text,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Features from "./FeaturesTab";
import Integrations from "./IntegrationTab";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={"sticky"}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        // border="2px solid black"
        background="rgb(255,255,255)"
      >
        <Flex
          h={"100px"}
          alignItems={"center"}
          w={{ sm: "94%", md: "84%", lg: "84%" }}
          ml={{ sm: "3%", md: "8%", lg: "8%" }}
          justifyContent={"space-between"}
        >
          <Flex
            alignItems={"center"}
            w={{ base: "30%", sm: "30%", md: "18%", lg: "12%" }}
            h={"100px"}
          >
            <Image src="https://www.timecamp.com/kb/wp-content/uploads/2020/11/colorLogo_lc.png" />
          </Flex>

          <Flex
            w="34%"
            h={"100"}
            alignItems="center"
            justifyContent={"space-between"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Features />
            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Pricing
              </Text>
            </Link>
            <Integrations />
            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Blog
              </Text>
            </Link>
          </Flex>
          <Flex
            // border="1px solid red"
            w="38%"
            h={"100px"}
            alignItems="center"
            justifyContent={"space-between"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Book a Demo
              </Text>
            </Link>

            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Sign in
              </Text>
            </Link>
            <Button
              bg={"rgb(247,184,1)"}
              color="white"
              p={"25px 40px 25px 40px"}
              borderRadius={"30px"}
              _hover={{ bg: "orange" }}
            >
              Start tracking time
            </Button>
          </Flex>

          <Button
            onClick={onOpen}
            display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
          >
            <HamburgerIcon size="100px" />
          </Button>
        </Flex>
      </Box>
      <Box>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerFooter />
          <DrawerContent w={"100%"} mt={"100px"}>
            <DrawerBody
              w={{ sm: "94%", md: "84%" }}
              ml={{ sm: "3%", md: "8%" }}
            >
              <Features />
              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text fontWeight={500} bg={"white"}>
                  Pricing
                </Text>
              </Link>
              <Integrations />
              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text fontWeight={500} bg={"white"}>
                  Blog
                </Text>
              </Link>

              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text fontWeight={500} bg={"white"}>
                  Book a Demo
                </Text>
              </Link>

              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text
                  cursor={"pointer"}
                  onClick={() => navigate("/login")}
                  fontWeight={500}
                  bg={"white"}
                >
                  Sign in
                </Text>
              </Link>
              <Button
                bg={"rgb(247,184,1)"}
                color="white"
                p={"25px 40px 25px 40px"}
                borderRadius={"30px"}
                _hover={{ bg: "orange" }}
                w="100%"
              >
                Start tracking time
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
