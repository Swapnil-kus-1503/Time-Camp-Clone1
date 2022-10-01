import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { getTimeInString } from "./getTimeIn";

export default function StopTimer({ initial = 0, end }) {
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(initial);
  const timer = React.useRef();

  const startTimerInterval = () => {
    if (isRunning) {
      return null;
    }
    timer.current = setInterval(() => {
      setTime((prev) => prev + 1);
      setIsRunning(true);
    }, 1000);
    document.title = getTimeInString(time);
  };
  if (isRunning && end == time) {
    clearInterval(timer.current);
  }
  const stopTimer = () => {
    clearInterval(timer.current);
    setIsRunning(false);
  };
  React.useEffect(() => {
    return () => stopTimer();
  }, []);

  return (
    <Box style={{
        display:"flex",
        gap:"25px"
    }}>
      <Text color="blue">
        {isRunning ? (getTimeInString(time)) : "Add manually"}
      </Text>
      <Button onClick={isRunning ? stopTimer : startTimerInterval}
       style={isRunning ? {backgroundColor:"#dc0000" ,color:"white", width:"151px", height:"38px",borderRadius:"8px"} : {backgroundColor:"#4bb063", width:"151px", height:"39px",borderRadius:"8px"}}>
        {isRunning ? "Stop Timer" : "Start Timer"}
      </Button>
    </Box>
  );
}
