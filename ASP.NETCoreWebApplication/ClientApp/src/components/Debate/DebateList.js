import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';

export default class DebateList extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }
    componentDidMount(){
        debugger;
        axios.get('https://localhost:5001/api/debat')
            .then(response => {
                this.setState({ business: response.data });
                debugger;

            }) 
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.business.map(function(object, i){
            return <Table obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h4 align="center">Debate List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release date</th>
                        <th>Genre</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}  
