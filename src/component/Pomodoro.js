import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Pomodoro(props) {
  const initialTime = props.time;
  const [seconds, setSecond] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [stop, setStop] = useState("Start");
  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSecond(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const startCounter = () => {
    if (seconds > 0) {
      setIsActive(!isActive);
      if (stop === "Start") {
        setStop("Stop");
      } else {
        setStop("Start");
      }
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setSecond(initialTime);
  };

  return (
    <div className="pomo-container">
      <div className="card-pomo">
        <div>
          <h1 className="time">{formatTime(seconds)}</h1>
        </div>
        <div className="button-container">
          <div>
            <button type="button" className="button" onClick={startCounter}>
              {stop}
            </button>
          </div>
          <div>
            <button className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Pomodoro;
