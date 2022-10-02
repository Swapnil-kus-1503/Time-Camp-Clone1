import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { UserAuth } from "./Context/Authcontext";

function DummyDashboard() {
  const { logOut, user } = UserAuth();

  const handleSignout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Heading>{user.email}</Heading>
      <Button onClick={handleSignout}>Logout</Button>
    </Box>
  );
}

export default DummyDashboard;
