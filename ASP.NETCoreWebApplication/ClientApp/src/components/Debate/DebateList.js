import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './debate.css';

export default class DebateList extends Component {
    state = {
        debate: []
    }

    componentDidMount() {
        axios.get(`https://localhost:5001/api/Debat`)
            .then(res => {
                const debate = res.data;
                this.setState({ debate });
            })
    }

    deleteContact (id) {
        axios.delete(`https://localhost:5001/api/Debat/${id}`)
            .then(() => {
                return axios.get(`https://localhost:5001/api/Debat/`)
            })
            .then(res => {
                // Update users in state as per-usual
                const debate = res.data;
                this.setState({ debate });
            })
    }
    
    render() {
        return (
                this.state.debate
                    .map(debate =>
                        <table key={debate.id}>
                            <td>
                                {debate.title}
                            </td>
                            <td>
                                {debate.releaseDate}
                            </td>
                            <td>
                                {debate.genre}
                            </td>
                            <td>
                                {debate.age}
                            </td>
                            <td>
                                {debate.visibility}
                            </td>
                            <td>
                                <Link to={"/edit/"+this.state.debate.Id} className="btn btn-success">Edit</Link>
                            </td>
                            
                            <td>
                                <button onClick={ () => this.deleteContact(debate.id) } className="btn btn-success">Remove</button>
                            </td>
                            
                        </table>
                    ))
            }
}  
