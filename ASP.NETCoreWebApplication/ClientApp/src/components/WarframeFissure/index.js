import React, { Component } from 'react'
import authService from '../api-authorization/AuthorizeService'
import { Loading } from "../Loading";

import './style.css'

export class WarframeFissure extends Component {
    constructor(props) {
        super(props);
        this.state = { fissures: [], loading: true };
    }
    
    componentDidMount() {
        this.populateWarframeFissure();
    }
    
    static renderWarframeFissure(fissures) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr className="wf-list-element">
                        <th>Activation</th>
                        <th>Expiration</th>
                        <th>Tier</th>
                        <th>Ennemis</th>
                        <th>Mission</th>
                    </tr>
                </thead>
                <tbody>
                    {fissures.map(fissure =>
                        <tr key={fissure.id} className="wf-list-element">
                            <td>{fissure.startTime}</td>
                            <td>{fissure.endTime}</td>
                            <td>{fissure.tier}</td>
                            <td>{fissure.enemy}</td>
                            <td>{fissure.node}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    
    render() {
        let contents = this.state.loading ?
            <Loading /> :
            WarframeFissure.renderWarframeFissure(this.state.fissures);
        
        return (
            <div>
                <h1 id="tabelLabel">Warframe Available Fissures</h1>
                <p>This component shows all available fissure missions in-game.</p>
                {contents}
            </div>
        );
    }

    async populateWarframeFissure() {
        const token = await authService.getAccessToken();
        const response = await fetch('fissure', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        console.log(data);
        this.setState({ fissures: data, loading: false });
    }
}