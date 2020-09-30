<<<<<<< HEAD
import React, { Component } from 'react';

const TIMER_VALUE = 5;


class Clock extends Component {

    constructor(props) {
      super(props);

        
      this.state = {
        seconds: TIMER_VALUE,
        paused: false,
        status: "Pause"
      };
      this.clockToggle = this.clockToggle.bind(this);
=======
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
>>>>>>> 170fd2cab947ce162ebb43620f6580d901b96948
    }
    
    
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    clockToggle() {
      this.setState({
        paused: !this.state.paused,
        status: this.state.paused?"Pause":"Resume"
      });

<<<<<<< HEAD
      if(this.state.status == "Reset") {
        this.setState({
          seconds: TIMER_VALUE,
          paused: false,
          status: "Pause"
        });

        this.timerId = setInterval(
          () => this.tick(), 1000
        );
      }
    }

    tick() {
      if(this.state.seconds <= 1) {
        clearInterval(this.timerId);
        this.setState({
          status: "Reset"
        })
      }

      if(this.state.paused == false) {
        this.setState({
            seconds: this.state.seconds - 1
        });
    
      }   
    }

    render(props) {
        return (
        <div id="clock">
            <p>{this.state.seconds + "s"}</p>
            <button onClick={this.clockToggle}>{this.state.status}</button>
        </div>
    );
    }
=======
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
>>>>>>> 170fd2cab947ce162ebb43620f6580d901b96948
}

export default Clock;
