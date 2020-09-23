import React, { Component } from 'react';


class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 10
        };
    }
    
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        if(this.state.seconds <= 1) {
            clearInterval(this.timerId);
        }

        this.setState({
            seconds: this.state.seconds - 1
        });
    }

    render(props) {
        return (
        <div id="clock">
            <p>{this.state.seconds + "s"}</p>
        </div>
    );
    }
}

export default Clock;
