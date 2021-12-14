import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Table extends Component {
    constructor(props) {
        super(props);
    }

    DeleteDebate= () =>{
        axios.delete('https://localhost:5001/api/Debat?id='+this.props.obj.Id)
            .then(json => {
                if(json.data.Status==='Delete'){
                    alert('Record deleted successfully!!');
                }
            })
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.Title}
                </td>
                <td>
                    {this.props.obj.ReleaseDate}
                </td>
                <td>
                    {this.props.obj.Genre}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={this.DeleteDebate} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Table;  
