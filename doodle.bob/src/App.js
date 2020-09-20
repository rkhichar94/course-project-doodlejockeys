import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./components/Chat"

function App() {
  const gameInfo = {
    gameid: 0,
    roundNumber: 1,
    users: {
      1: { userid: 1, username: "iguanaoverlord", role: "artist" },
      2: { userid: 2, username: "chickennuggets", role: "guesser" },
      3: { userid: 3, username: "walrusparade", role: "guesser" }
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
  );
}

export default App;
