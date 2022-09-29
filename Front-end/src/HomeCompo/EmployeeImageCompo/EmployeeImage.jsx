import React from "react";

import { Box, Image, Flex, Heading } from "@chakra-ui/react";
function EmployeeImage() {
  return (
    <div>
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
    </div>
  );
}

export default EmployeeImage;
