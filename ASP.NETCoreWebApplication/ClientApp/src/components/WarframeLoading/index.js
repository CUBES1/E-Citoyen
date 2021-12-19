import React, { Component } from 'react';
import Sketch from "react-p5";
import './style.css'

export class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    setup(p5, canvasParentRef) {
        p5.createCanvas(this.props.width ?? 30, this.props.height ?? 30).parent(canvasParentRef);
        p5.I = 0.0;
        p5.STEP = p5.TWO_PI / (this.props.step ?? 30);
        p5.CIRCLE_RADIUS = (p5.width > p5.height ? p5.height : p5.width) / 2;
        p5.CIRCLE_WEIGHT = p5.CIRCLE_RADIUS * 0.2;
        p5.CIRCLE_RADIUS -= (p5.CIRCLE_WEIGHT / 2);
    }
    
    draw(p5) {
        p5.clear();
        p5.translate(p5.width / 2, p5.height / 2);
        let i = p5.STEP * p5.I;
        
        p5.noFill();
        p5.stroke("lightgrey");
        p5.strokeWeight(p5.CIRCLE_WEIGHT / 2);
        p5.ellipse(0, 0, p5.CIRCLE_RADIUS * 2, p5.CIRCLE_RADIUS * 2);

        p5.stroke("grey");
        p5.strokeWeight(p5.CIRCLE_WEIGHT);
        p5.point(
            p5.sin(i) * p5.CIRCLE_RADIUS,
            p5.cos(i) * p5.CIRCLE_RADIUS
        );
        
        p5.I++;
    }

    render() {
        return (
            <div className="loading-component">
                <Sketch setup={this.setup.bind(this)} draw={this.draw.bind(this)}/>
            </div>
        );
    }    
}