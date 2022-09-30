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
        p={"6rem"}
        minH={"900px"}
        // border="2px"
        fontSize={"md"}
        bgImg={"https://cdn-m.timecamp.com/img/backgroundTop.webp"}
      >
        <Flex
          // border={"2px"}
          w={"80%"}
          margin={"auto"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          direction={["column", "column", "column", "row"]}
        >
          <Box
            borderRadius={"6px"}
            backdropBlur={"3px"}
            bgColor={"rgba(255, 255, 255, 0.9)"}
            flex={"48%"}
            p={"2rem"}
            w={["100%", "100%", "100%", "40%"]}
          >
            <Text
              fontSize={"14px"}
              fontWeight={"700"}
              lineHeight={"1.1"}
              w={"93%"}
              mr={"auto"}
              mb={"0.5rem"}
              mt={"0"}
            >
              Free time tracking software
            </Text>
            <Text
              fontWeight={"600"}
              color={"#1b1b20"}
              fontSize={"45px"}
              lineHeight={"1.1"}
              w={"93%"}
              mr={"auto"}
              mb={"0.5rem"}
              mt={"20px"}
            >
              Increase project profitability with time tracking
            </Text>
            <Box
              p={"1rem"}
              mb={"2rem"}
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
              // my="10"
              w="100%"
              px="1"
              py="1"
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
                px="2"
                py="2"
              />

            </Box>
            <Text my="10" fontSize="13px" color={"#767676"}>
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
              gap={"20px"}
              whiteSpace={"nowrap"}
              textAlign={"center"}
              direction={["column", "column", "column", "row"]}
            >
              <Button
                w={"200px"}
                bgColor={"#25cf60"}
                borderRadius={"26px"}
                p={["6px", "14px"]}
                color={"#fff"}
                fontWeight={"700"}
                border={"none"}
                whiteSpace={"nowrap"}
                textAlign={"center"}
                _hover={{ bgColor: "#1da44c" }}
              >
                Start tracking time
              </Button>
              <Button
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={["1px", "10px"]}
                w={"200px"}
                borderRadius={"26px"}
                color={"rgb(104, 102, 102)"}
                fontWeight={"500"}
                whiteSpace={"nowrap"}
                textAlign={"center"}
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
            mb={"2rem"}
            ml={"2rem"}
            backdropBlur={"3px"}
            bgColor={"rgba(255, 255, 255, 0.9)"}
            borderRadius={"6px"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            flex={"0 0 48%"}
            pr={"15px"}
            pl={"15px"}
            w={["100%", "100%", "100%", "50%"]}
            mt={["3rem", "3rem", "3rem", "20rem"]}
          >
            <Flex
              mb={"10px"}
              mt={"20px"}
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
                w={"70px"}
                h={"70px"}
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
              p={["0", "0.5"]}
            >
              Adam Wagner, Co-owner and Chief Strategy Officer
            </Box>

            <Box
              fontWeight={"400"}
              fontSize={"14px"}
              textAlign={"center"}
              p={"1rem"}
              mb={"2rem"}
            >
              „TimeCamp proved to be an essential management tool that gives us
              clear insight into a projects efficiency and helps to avoid an
              overblown workload for our team.”
            </Box>
            <Image
              w={"20%"}
              h={"21px"}
              verticalAlign={"middle"}
              borderStyle={"none"}
              mb={"3rem"}
              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt="raindrop"
            />
          </Flex>
        </Flex>
      </Box>
      <SocialProof />
      <Center mt={["1rem","2.5rem","4rem","7rem"]}>
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
