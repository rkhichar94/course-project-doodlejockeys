import React, { Component } from 'react';
import "../styles.css";
import chicken from "../tempAvatars/chicken.png";
import duck from "../tempAvatars/duck.png";
import rhino from "../tempAvatars/rhino.png";

class Scoreboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			profilePictures: {
				"chicken": chicken,
				"duck": duck,
				"rhino": rhino
			}
		}
	}

	render(props) {

		const userList = this.props.userList;
		const tags = [];

		console.log(this.state.profilePictures);

		for (let user of Object.keys(userList)) {
			tags.push(
				<div className="user-score">

					<img src={this.state.profilePictures[userList[user].profilePic]} alt="my profile pic" className="myProPic" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
					<p className="user-name">{userList[user].username}</p>
					<p className="score">{userList[user].score}</p>
=======
>>>>>>> 3c331692609c665afe60438c9ca72d3fb35341fc
					<div className="user-info">
						<p className="user-name">{userList[user].username}</p>
						<p className="score">{userList[user].preRoundScore}</p>
					</div>
<<<<<<< HEAD
=======
>>>>>>> 2d6498c... Task #21: Add styles to make everything fall in place.
>>>>>>> 3c331692609c665afe60438c9ca72d3fb35341fc
				</div>
			);
		}

		return (
			<div id="scoreboard">
				{tags}
			</div>
		);
	}
}

export default Scoreboard;