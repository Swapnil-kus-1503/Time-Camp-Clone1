import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/Trial.module.css";

export const Trial = () => {
  return (
    <Flex gap="2rem" className={styles.trial_box}>
      <Box lineHeight={"2.5rem"}>
        ⌛ <strong>15 days</strong> left in your Pro Trial
      </Box>
      <Button color={"white"} colorScheme={"yellow"}>
        Subscribe to Pro
      </Button>
      <Button variant={"outline"}>Book a demo</Button>
    </Flex>
  );
};
