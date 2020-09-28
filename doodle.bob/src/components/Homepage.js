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
    backgroundColor :'gold',
    color : 'black',
    height : '100%'
  }

//const HomePage = () => {
class HomePage extends Component {
  render(){
        return (
        <div>
          <div className="game-middle">
          <div style={rootStyle}>
          <div class="logo">
              <img src={require("../images/logo.png")}
              alt="dblogo"
              class="dblogo" />
          </div>
          
  
      <div className="Welcome">
      <p className="first">Welcome to</p>
      <p className="second"><b>Doodle.bob</b></p>
    </div>
    {/* CARD */}
    <div className="game-card">
          <div className="game-middle">
            <div>
              <div className="content">
            <h2 className="h2-gamecode"> Game Code:</h2>
            <input className="gamecode"
                type="text"
                name="gamecode"
                placeholder="Enter a game code here"
              ></input>
            <p className="h2-gamecode">Username: </p>
            <input className="gamecode"
                type="text"
                name="gamecode"
                placeholder="Enter cool name here"
              ></input>
              <p className="card-footer"> Configure your gameboard and avatar on the next page!</p>
              <button className="continue"> <span> Continue </span></button>
              </div>
              {/* Sign Up Button */}
              <div className="newgame-tab">
                <button
                  className="signup-button"
                >
                  <span>New Game</span>
                </button>
              </div>
              {/* Login Button */}
              <div className="joingame-tab">
                <button
                  className="joingame-button"
                >
                  <span>Join Game</span>
                </button>
              </div>
            </div>
          </div>
     </div>
     {/* */}
     <div className="footer">
     <footer>
       <p> Contact</p>
       <p> Terms of Service</p>
       <p> Credit</p> 
     </footer>
     </div>
    </div>
    </div>
  </div>
        );
      }
    }
export default HomePage;
