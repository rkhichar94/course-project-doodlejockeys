import React, { Component } from 'react';


class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
		timer : 100000,
		countdown : new Date().gettime() + timer,
		now : new Date().getTime(),
		timebetween : countdown - now,
		minutes : Math.floor((timebetween % (1000*60 * 60))/(1000 * 60)),
		seconds : Math.floor((timebetween % (1000*60))/1000)
        };
    }
    
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          	
		countdown : new Date().gettime() + timer,
		now : new Date().getTime(),
		timebetween : countdown - now,
		minutes : Math.floor((timebetween % (1000*60 * 60))/(1000 * 60)),
		seconds : Math.floor((timebetween % (1000*60))/1000)

        });
    }

    render(props) {
        return (
        <div id="clock">
            <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
    );
    }
}

export default Clock;
