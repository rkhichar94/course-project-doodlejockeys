import React, { Component } from 'react';
import Sketch from 'react-p5';
import "../styles.css";

class Stroke {
	constructor(_init) {
		this.init = _init;
		this.points = [];
		this.stroke = 0;
	}

	add(p5, point) {
		this.points.push(point);
		p5.stroke(this.stroke);
		p5.line(this.init.x, this.init.y, point.x, point.y);
		this.init.x = point.x;
		this.init.y = point.y;
	}
}

const ALL_STROKES = [];


class Canvas extends Component {

    constructor(props) {
		super(props);
		this.state = {
			lastStrokeIdx: -1,
			erasing: false
		}
    }

    render(props) {
        return (
		<div id="canvas">
			<Sketch 
				setup={(p5, parent) => {
					p5.createCanvas(700, 500).parent(parent);
				}}
				
				draw = {(p5) => {
					p5.background(255);
					p5.noLoop();
				}}

				mousePressed = {p5 => {
					this.setState({
						lastStrokeIdx: this.state.lastStrokeIdx + 1
					});
					ALL_STROKES.push(new Stroke(p5.createVector(p5.mouseX, p5.mouseY)));
				}}
				
				mouseDragged = {p5 => {
					ALL_STROKES[this.state.lastStrokeIdx].add(p5, p5.createVector(p5.mouseX, p5.mouseY));
				}}/>
		</div>
	);
    }
}

export default Canvas;