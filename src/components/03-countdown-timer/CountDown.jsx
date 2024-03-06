import React, { useEffect, useRef, useState } from "react";

const CountDown = ({ initialTime, onTimeFinish }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimeFinish]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handlePauseResume = () => {
    setIsRunning((prev) => !prev);
  };
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(initialTime);
    setIsRunning(false);
  };
  return (
    <div className="timer">
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
      <div className="timer-buttons">
        <button onClick={handlePauseResume}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
};

export default CountDown;
