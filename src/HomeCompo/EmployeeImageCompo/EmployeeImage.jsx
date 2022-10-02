import React from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  Center,
  SimpleGrid,
  Button,
  Text,
  Input,
  Img,
} from "@chakra-ui/react";
import SocialProof from "../../components/timeTracker/SocialProof";
function EmployeeImage() {
  return (
    <div>
      <Box

        overflowX={"hidden"}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        p={["1rem", "2rem", "5rem", "7rem"]}
        minH={["800px"]}

        fontSize={"md"}
        bgImg={"https://cdn-m.timecamp.com/img/backgroundTop.webp"}
      >
        <Flex
          mt={["24", "20", "14", "0.5"]}
          justify={"space-between"}

          w={["100%", "90%", "90%", "93%"]}

          direction={["column", "column", "column", "row"]}
        >
          <Box
            // border={"2px"}
            borderRadius={"6px"}
            backdropBlur={"3px"}
            bgColor={"rgba(255, 255, 255, 0.9)"}
            flex={"48%"}
            p={["3rem", "1rem", "1rem", "2rem"]}

            w={["100%", "100%", "100%", "50%"]}
          >
            <Text
              fontSize={"14px"}
              fontWeight={"700"}

            >
              Free time tracking software
            </Text>
            <Text
              fontWeight={"600"}
              color={"#1b1b20"}
              fontSize={"45px"}
              lineHeight={"1.1"}
              w={["99%", "99%", "96%", "93%"]}

            >
              Increase project profitability with time tracking
            </Text>
            <Box
              p={["0rem", "0rem", "1rem", "1rem"]}
              // mb={"2rem"}
              fontSize={"1rem"}
              fontWeight={"400"}
              lineHeight={"1.5"}
            >
              <Text fontSize={"md"} color={"#767676"} mt={"0.5rem"}>
                ✓ Unlimited users
              </Text>
              <Text fontSize={"md"} color={"#767676"} mt={"0.5rem"}>
                ✓ Unlimited projects
              </Text>
              <Text fontSize={"md"} color={"#767676"} mt={"0.5rem"}>
                ✓ 30+ integrations
              </Text>
              <Text fontSize={"md"} color={"#767676"} mt={"0.5rem"}>
                ✓ Automated time tracking
              </Text>
            </Box>
            <Box

              p={"1rem"}
              bgColor="white"
              borderRadius="50px"
              boxShadow="md"
              bg="white"
            >
              <Input
                type="email"
                placeholder="Your e-mail address"
                border={"none"}
                outline={"none"}
                w={"100%"}
                borderRadius={"50px"}
                p={"1"}

              />
            </Box>
            <Text
              // my="10"
              p={["5", "4", "4", "4"]}
              fontSize="13px" color={"#767676"}>
              By signing up you agree to our{" "}
              <b color={"#25cf60"} font-weight={"100"}>
                Terms and Conditions
              </b>{" "}
              and{" "}
              <b color={"#25cf60"} font-weight={"100"}>
                Privacy Policy
              </b>
              .
            </Text>
            <Flex
              w={"100%"}
              gap={"7"}



              direction={["column", "column", "column", "row"]}
            >
              <Button
                size={["10", "10", "10", "10"]}
                bgColor={"#25cf60"}
                borderRadius={"full"}
                // p={["4", "4", "4", "4"]}
                p={"4"}
                color={"#fff"}
                fontWeight={"700"}
                border={"none"}

                textAlign={"center"}
                _hover={{ bgColor: "#1da44c" }}
              >
                Start tracking time
              </Button>
              <Button

                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={["6", "6", "5", "6"]}
                // w={"200px"}
                borderRadius={"26px"}
                color={"rgb(104, 102, 102)"}
                fontWeight={"500"}

              >
                Or sign up with:{" "}
                <Img
                  src="https://cdn-m.timecamp.com/img/logos/google.svg"
                  alt="google"
                  w={"50px"}
                />
              </Button>
            </Flex>
          </Box>

          <Flex

            mb={["1rem", "1rem", "2rem", "2rem"]}
            ml={["0rem", "0rem", "0rem", "4rem"]}
            backdropBlur={"3px"}
            bgColor={"rgba(255, 255, 255, 0.9)"}
            borderRadius={"md"}
            justify={"center"}
            flexDirection={"column"}
            align={"center"}

            w={["100%", "100%", "100%", "50%"]}
            mt={["1rem", "2rem", "4rem", "20rem"]}
          >
            <Flex

              m={"4"}

              w={"70px"}
              h={"70px"}
              backdropBlur={"3px"}
              bgColor={"#ffffffe6"}
              borderRadius={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Img
                borderRadius={"100%"}
                w={"100%"}
                h={"100%"}
                verticalAlign={"middle"}
                borderStyle={"none"}
                src="https://cdn-m.timecamp.com/img/person.jpg"
                alt=""
              />
            </Flex>

            <Box
              fontWeight={"550"}
              fontSize={"14px"}
              textAlign={"center"}
              p={["0rem", "0rem", "0", "0.5"]}
            >
              Adam Wagner, Co-owner and Chief Strategy Officer
            </Box>

            <Box
              fontWeight={"400"}
              fontSize={"14px"}
              textAlign={"center"}
              p={"1rem"}

            >
              "TimeCamp proved to be an essential management tool that gives us
              clear insight into a projects efficiency and helps to avoid an
              overblown workload for our team.”
            </Box>
            <Image
              w={"20%"}
              h={"21px"}
              m={"2"}
              verticalAlign={"middle"}
              borderStyle={"none"}

              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt="raindrop"
            />
          </Flex>
        </Flex>
      </Box>
      <SocialProof />
      <Center mt={["1rem", "2.5rem", "4rem", "7rem"]}>
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
              _hover={{ bg: "orange" }}
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
