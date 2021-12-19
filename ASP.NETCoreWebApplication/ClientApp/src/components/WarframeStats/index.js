import React, { Component } from 'react';
import { WarframeFissure } from "./WarframeFissure";
import "./style.css";

export class WarframeStats extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <WarframeFissure title="Available fissures missions" className="wf-stat-card" endpoint="fissure"/>
            </div>)
    }
}