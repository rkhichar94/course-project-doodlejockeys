
import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/Homepage";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    );
  }
}
export default App;

/*
import React from 'react';
import './App.css';
import Chat from "./components/Chat"

function App() {
  const gameInfo = {
    gameid: 0,
    roundNumber: 1,
    users: {
      1: { userid: 1, username: "iguanaoverlord", profilePic: "duck", role: "artist" },
      2: { userid: 2, username: "chickennuggets", profilePic: "chicken", role: "guesser" },
      3: { userid: 3, username: "walrusparade", profilePic: "rhino", role: "guesser" }
    },
  };
  return (
    <div className="App">
      <Chat
        gameid={gameInfo.gameid}
        userList={gameInfo.users}
        round={gameInfo.roundNumber}
      />
    </div>
  ); */