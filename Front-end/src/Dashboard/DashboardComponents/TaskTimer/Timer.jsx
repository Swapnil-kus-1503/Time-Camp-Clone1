import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function Timer() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <>

      <div style={{fontSize: '20px',width:"30px"}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>

       {isRunning ?
      '<button onClick={stop}>Start222</button>':'<button onClick={pause}>Pause</button>'
       }

   
    //   <button onClick={start}>Start</button>
      //<button onClick={pause}>Pause</button>

      </>
  );
}
export default Timer