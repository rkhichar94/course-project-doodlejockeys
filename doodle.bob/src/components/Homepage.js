import React, { Component } from "react";
import "../App.css";
import "../css/Homepage.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
//Functional Component 
var rootStyle = {
  backgroundColor: 'gold',
  color: 'black',
  height: '100%'
}

//const HomePage = () => {
class HomePage extends Component {
  render() {
    return (
      <div>
        <div style={rootStyle}>
          <div class="logo">
            <img src={require("../images/logo.png")}
              alt="dblogo"
              class="dblogo" />
          </div>
          <div className="Welcome">
            <div>
              <p>Welcome to</p>
              <b>Doodle.bob</b>
            </div>
            <div className="game-card">
              <div>
                {/* New Game Button */}
                <div className="newgame-tab">
                  <button
                    className="newgame-button"
                    onClick={(e) => {
                      //setMenuOption("signup", mainContent, e);
                      this.changeState("signup");
                    }}>
                    <span className="newgame">New Game</span>
                  </button>
                </div>
                {/* Join Game Button */}
                <div className="joingame-tab-highlight">
                  <button
                    className="join-button"
                  //onClick={(e) => setMenuOption("login", mainContent, e)}
                  >
                    <span className="joingame">Join Game</span>

                  </button>
                  <Link to="/PlayPage"><button className="continueToPlay">Continue to Play</button></Link>

                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="table">
              <ul className="horizontal-list">
                <li> Contact </li>
                <li> Terms of Service</li>
                <li> Credits </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
