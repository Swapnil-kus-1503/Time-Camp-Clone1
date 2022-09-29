import React from "react";
import Styles from "./Employee.module.css";
import {
  Box,
  Image,
  Flex,
  Heading,
  Center,
  SimpleGrid,
  Button,
  Text,
} from "@chakra-ui/react";
function EmployeeImage() {
  return (
    <div>
      <Box className={Styles.background}>
        <Flex
          className={Styles.left}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        >
          <Box
            className={Styles.leftbox}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "40%" }}
          >
            <h1>Free time tracking software</h1>
            <h2>Increase project profitability with time tracking</h2>
            <div>
              <h3>✓ Unlimited users</h3>
              <h3>✓ Unlimited projects</h3>
              <h3>✓ 30+ integrations</h3>
              <h3>✓ Automated time tracking</h3>
            </div>
            <Box
              my="10"
              w="100%"
              px="4"
              py="2"
              bgColor="white"
              borderRadius="50px"
              boxShadow="md"
              bg="white"
            >
              <input
                type="email"
                placeholder="Your e-mail address"
                className={Styles.input}
              />
            </Box>
            <Text my="10" fontSize="13px" color={"#767676"}>
              By signing up you agree to our{" "}
              <b className={Styles.greenText}>Terms and Conditions</b> and{" "}
              <b className={Styles.greenText}>Privacy Policy</b>.
            </Text>
            <Flex
              className={Styles.btndiv}
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
            >
              <button className={Styles.btn1}>Start tracking time</button>
              <button className={Styles.btn2}>
                Or sign up with:{" "}
                <img
                  src="https://cdn-m.timecamp.com/img/logos/google.svg"
                  alt="google"
                  className={Styles.btnimg}
                />
              </button>
            </Flex>
          </Box>

          <Flex
            className={Styles.right}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            mt={{ base: "3rem", sm: "3rem", md: "3rem", lg: "20rem" }}
          >
            <Flex className={Styles.personal}>
              <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="" />
            </Flex>

            <Box className={Styles.personalHeader}>
              Adam Wagner, Co-owner and Chief Strategy Officer
            </Box>

            <Box className={Styles.personalPara}>
              „TimeCamp proved to be an essential management tool that gives us
              clear insight into a projects efficiency and helps to avoid an
              overblown workload for our team.”
            </Box>
            <Image
              className={Styles.logo}
              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt=""
            />
          </Flex>
        </Flex>
      </Box>


      <Box bg={"#25cf60"} pt={"20px"}>
        <Box w={"100%"} minH={"1px"}>
          <Heading color={"white"} fontWeight={"700"} textAlign={"center"}>
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Heading>
        </Box>

        <Flex
          pb={"0.5rem"}
          justify={"space-between"}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
        >
          <Box
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            minH="1px"
          >
            <Image
              borderStyle={"none"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
              alt=""
            />
          </Box>

          <Box
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            minH="1px"
          >
            <Image
              borderStyle={"none"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
              alt=""
            />
          </Box>

          <Box
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            minH="1px"
          >
            <Image
              borderStyle={"none"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
            />
          </Box>
          <Box
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            minH="1px"
          >
            <Image
              borderStyle={"none"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
              alt=""
            />
          </Box>
          <Box
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            minH="1px"
          >
            <Image
              borderStyle={"none"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
              alt=""
            />
          </Box>
          <Box
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            minH="1px"
          >
            <Image
              borderStyle={"none"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
              alt=""
            />
          </Box>
        </Flex>
      </Box>
      <Center>
        <SimpleGrid
          columns={["1", "1", "2"]}
          borderRadius={"2xl"}
          w={["100%", "90%", "80%"]}
          minH="438px"
          bg={"#1B1B20"}
        >
          <Flex direction={"column"} gap="10" p={["4", "7", "12", "16"]}>
            <Box
              fontFamily={"lato,sans-serif"}
              color={"white"}
              fontWeight="700"
            >
              <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
                Stay on top of your
              </Heading>
              <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
                teams' productivity
              </Heading>
              <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
                and profitability!
              </Heading>
            </Box>
            <Button
              w={["90%", "70%", "60%"]}
              bg={"#F7B801"}
              color="white"
              borderRadius={"full"}
              size={"lg"}
            >
              Book a Demo
            </Button>
          </Flex>
          <Image
            w={["90%", "100%"]}
            h={["220px", "330px", "430px"]}
            src="https://cdn-m.timecamp.com/img/landing-page/banner-icon.svg"
          ></Image>
        </SimpleGrid>
      </Center>
    </div>
  );
}

export default EmployeeImage;
