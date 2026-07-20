import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, handleStep] = useState(1);
  const [count, handleCount] = useState(0);

  //step handling code for counter
  function stepPrevHandler() {
    handleStep((currStep) => {
      const currSt = currStep - 1;
      if (currSt < 1) {
        currStep = 1;
        alert("Cannot possible to decrese it more");
        return currStep;
      } else {
        return (currStep = currSt);
      }
    });
  }

  function stepNxtHandler() {
    handleStep((currStep) => (currStep = currStep + 1));
  }
  //#

  //counter hanler code
  function countPrevHandler() {
    handleCount((currCount) => (currCount = currCount - step));
  }

  function countNxtHandler() {
    handleCount((currCount) => (currCount = currCount + step));
  }

  const date = new Date();

  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={stepPrevHandler}>-</button>Step: &nbsp;{step}
        <button onClick={stepNxtHandler}>+</button>
      </div>
      <div>
        <button onClick={countPrevHandler}>-</button>Count: &nbsp;{count}
        <button onClick={countNxtHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} dasy ago`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
