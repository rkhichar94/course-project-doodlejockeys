import React, { Component } from 'react';
import Clock from './Clock';
import Chat from './Chat';
import Canvas from './Canvas';
import Toolbar from './Toolbar';

function PlayPage() {
    const gameInfo = {
        currentGames: [
            { gameid: 0, joincode: "0000", currentRound: 1, totalRounds: 5, currentArtistId: 2, currentWord: "ball" },
            { gameid: 1, joincode: "1111", currentRound: 1, totalRounds: 5, currentArtistId: 2, currentWord: "ball" }
        ],
        users: {
            1: { userid: 1, username: "iguanaoverlord", profilePic: "duck", role: "guesser", preRoundScore: 0, thisRoundScore: 0 },
            2: { userid: 2, username: "chickennuggets", profilePic: "chicken", role: "artist", preRoundScore: 0, thisRoundScore: 0 },
            3: { userid: 3, username: "walrusparade", profilePic: "rhino", role: "guesser", preRoundScore: 0, thisRoundScore: 0 }
        },
    };
    return (
        <React.Fragment>
            <Canvas />
            <Chat
                gameid={gameInfo.currentGames[0].gameid}
                userList={gameInfo.users}
                round={gameInfo.currentGames[0].currentRound}
                word={gameInfo.currentGames[0].currentWord}
            />
            <Toolbar />
            <Clock />

        </React.Fragment>
    );
}

export default PlayPage;