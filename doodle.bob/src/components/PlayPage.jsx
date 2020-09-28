import React, { Component } from 'react';
import Clock from './Clock';
import Scoreboard from './Scoreboard';
import Chat from './Chat';
import Canvas from './Canvas';
import Toolbar from './Toolbar';

function PlayPage() {
    const gameInfo = {
        gameid: 0,
        roundNumber: 1,
        users: {
            1: { userid: 1, username: "iguanaoverlord", profilePic: "duck", role: "artist", score: 0 },
            2: { userid: 2, username: "chickennuggets", profilePic: "chicken", role: "guesser", score: 0 },
            3: { userid: 3, username: "walrusparade", profilePic: "rhino", role: "guesser", score: 0 }
        },
    };
    return (
        <React.Fragment>
            <Canvas />
			<Scoreboard  userList={gameInfo.users}/>
            <Chat
                gameid={gameInfo.gameid}
                userList={gameInfo.users}
                round={gameInfo.roundNumber}
            />
            <Toolbar />
            <Clock />

        </React.Fragment>
    );
}

export default PlayPage;