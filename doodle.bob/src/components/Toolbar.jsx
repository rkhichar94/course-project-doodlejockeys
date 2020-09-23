import React, { Component } from 'react';
import "../styles.css";


class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
      render() {
        return (
            <div className = "toolbar">
                
                    <button onClick={this.handleClick}> {this.state.isToggleOn ? 'Show Toolbar' : 'Hide Toolbar'}</button>
                    <button>Change brush</button>
                    <button>Change brush width</button>
                    <button style = {{backgroundColor:"white"}}>1</button>
                    <button style = {{backgroundColor:"black"}}>2</button>
                    <button style = {{backgroundColor:"red"}}>3</button>
                    <button style = {{backgroundColor:"orange"}}>4</button>
                    <button style = {{backgroundColor:"yellow"}}>5</button>
                    <button style = {{backgroundColor:"green"}}>6</button>
                    <button style = {{backgroundColor:"blue"}}>7</button>
                    <button style = {{backgroundColor:"indigo"}}>8</button>
                    <button style = {{backgroundColor:"violet"}}>9</button>
                    <button>Clear board</button>
                    <button>Eraser</button>
            </div>
        );
      }
    }
export default Toolbar;