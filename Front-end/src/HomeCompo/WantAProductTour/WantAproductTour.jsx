import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

function WantAproductTour() {
  return (
    <div>
      <SimpleGrid columns={["1", "1", "2"]} minH="438px" bg={"#1B1B20"}>
        <Flex direction={"column"} gap="10" p={["4", "7", "12", "16"]}>
          <Box fontFamily={"lato,sans-serif"} color={"white"} fontWeight="700">
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
          <Text color={"white"} fontSize={"xl"}>
            Learn all the tracking basics of TimeCamp and track time like a true
            pro
          </Text>
          <Button
            w={["90%", "60%", "40%"]}
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
          w={["100%", "95%", "90%"]}
          h={["220px", "360px", "450px"]}
          src="https://cdn-m.timecamp.com/img/greenbranding/features/black_cta_img-platform.png"
        ></Image>
      </SimpleGrid>
    </div>
  );
}

export default WantAproductTour;
