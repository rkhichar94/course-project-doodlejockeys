import React from "react";


export default function App() {
  const [counterSecond, setCounterSecond] = React.useState(0);
  const [counter, setCounter] = React.useState(120);
  const [time, setTime] = React.useState("");
  const [status, setStatus] = React.useState("working");

  React.useEffect(() => {
    let secondCounterId;
    let counterId;
    if (status === "working") {
      secondCounterId = setTimeout(
        () => setCounterSecond(counterSecond + 1),
        1000
      );

      counterId = setTimeout(() => setCounter(counter - 1), 1000);
    }

    return () => {
      clearTimeout(counterId);
      clearTimeout(secondCounterId);
    };
  }, [counterSecond, counter, status]);

  const handletimer = () => {
    setTime(counterSecond);
  };
  const stopTimers = () => {
    setStatus("paused");
  };
  const resume = () => {
    setStatus("working");
  };

  return (
    <div className="App">

      <div>Countdown : {counter}</div>
      <div> time: {time} </div>

      <button onClick={stopTimers}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
}
