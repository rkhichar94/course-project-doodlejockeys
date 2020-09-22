import React, { Component } from 'react';
import Sketch from 'react-p5';
import "../styles.css";

const UP = true;
const DOWN = false;

class Canvas extends Component {

    constructor(props) {
		super(props);
		this.y = 0;
		this.direction = UP;
    }

    render(props) {
        return (
		<div id="canvas">
			<Sketch 
				setup={(p5, parent) => {
					p5.createCanvas(500, 500).parent(parent);
				}}
				
				draw = {(p5) => {
					p5.background(0);
					p5.fill(255, this.y * 1.3, 0);
					p5.ellipse(p5.width / 2, this.y, 50);
					if (this.y > p5.height) this.direction = DOWN;
					if (this.y < 0) {
						this.direction = UP;
					}
					if (this.direction === UP) this.y += 8;
					else this.y -= 4;

				}}/>
		</div>
	);
    }
}

export default Canvas;