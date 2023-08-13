import { useState } from "react";
import "./App.css";
import Pomodoro from "./component/Pomodoro";
import Todo from "./component/Todo";

function App() {
  const [componentA, setComponentA] = useState(true);
  const [componentB, setComponentB] = useState(false);
  const [componentC, setComponentC] = useState(false);

  const gotoPomodoro = () => {
    if (componentA === false) {
      console.log({ componentA });
      setComponentA(!componentA);
    }
    setComponentB(false);
    setComponentC(false);
  };
  const gotoSmallBreak = () => {
    console.log("1 time click" + componentB);
    if (componentB === false) {
      console.log("2 time Chick" + componentB);
      setComponentB(!componentB);
    }
    setComponentA(false);
    setComponentC(false);
  };
  const gotoLongBreak = () => {
    if (componentC === false) {
      setComponentC(!componentC);
    }
    setComponentA(false);
    setComponentB(false);
  };
  return (
    <div className="App-header">
      <div className="pomo-container">
      <div className="card-pomo">
        <div className="button-container">
          <div>
            <button
              className="button shadow hover:shadow-lg"
              onClick={gotoPomodoro}
            >
              Pomodoro
            </button>
          </div>
          <div>
            {" "}
            <button className="button" onClick={gotoSmallBreak}>
              Short Break
            </button>
          </div>
          <div>
            <button className="button" onClick={gotoLongBreak}>
             Long Break
            </button>
          </div>
        </div>
      </div>
      </div>
      
      {componentA && <Pomodoro time={1500} />}
      {componentB && <Pomodoro time={300} />}
      {componentC && <Pomodoro time={900} />}

      <div className="button-container">
        <Todo />
      </div>
    </div>
  );
}
export default App;
