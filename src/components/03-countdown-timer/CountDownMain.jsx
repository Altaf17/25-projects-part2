import React from "react";
import CountDown from "./CountDown";
import "./CountDown.css";
const CountDownMain = () => {
  const handleTimeFinish = () => {};
  return (
    <div className="countdown-timer-container">
      <h1>CountDown Timer</h1>
      <CountDown initialTime={120} onTimeFinish={handleTimeFinish} />
    </div>
  );
};

export default CountDownMain;
