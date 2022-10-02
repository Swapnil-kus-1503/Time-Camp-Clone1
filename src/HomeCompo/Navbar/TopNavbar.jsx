import { Box, Text } from "@chakra-ui/react";
import React from "react";

const TopNavbar = () => {
  return (
    <Box w={"100%"} bgColor={"#25cf60"} color={"#ffffff"} textAlign={"center"} p={"3"}>
      <Text fontSize={"md"}>
        Want to become a Reseller, Affiliate, or Integration Partner? We are
        recruiting for our new Partner Programs.{" "}
        <Text as={"b"} style={{ textDecoration: "underline", cursor: "pointer" }}>
          Learn more and apply here ➡️
        </Text>
      </Text>
    </Box>
  );
};

export default TopNavbar;
