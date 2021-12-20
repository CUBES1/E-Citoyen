import React, { Component } from 'react'
import { WarframeComponent } from "../WarframeComponent";
import { CountdownTimer } from "../../CountdownTimer";

import './style.css';
import '../WarframeComponent/style.css';

export class WarframeFissure extends WarframeComponent {
    constructor(props) {
        super(props);
        this.state.data = [];
        this.dataRender = (data) => {
            return (
                <table /*className='table table-striped'*/ className='wf-table'>
                    <thead>
                    <tr className="wf-list-element">
                        <th><div>Timer</div></th>
                        <th><div>Tier</div></th>
                        <th><div>Ennemis</div></th>
                        <th><div>Mission</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(fissure =>
                        <tr key={fissure.id} className="wf-list-element">
                            <td><div><CountdownTimer endDate={fissure.endTime}/></div></td>
                            <td><div>{fissure.tier}</div></td>
                            <td><div>{fissure.enemy}</div></td>
                            <td><div>{fissure.node}</div></td>
                        </tr>
                     )}
                    </tbody>
                </table>);
        }
    }
}