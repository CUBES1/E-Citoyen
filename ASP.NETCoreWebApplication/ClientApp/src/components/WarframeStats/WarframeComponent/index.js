import React, { Component } from 'react';
import authService from "../../api-authorization/AuthorizeService";
import { Loading } from "../../WarframeLoading";

export class WarframeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, data: { } }
        this.dataRender = (data) => (<div className="wf-component-default">{data.toString()}</div>)
    }

    componentDidMount() {
        this.populateData(this.props.endpoint);
    }
    
    async populateData(endpoint) {
        const token = await authService.getAccessToken();
        const response = await fetch(endpoint, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        
        const data = await response.json();
        this.setState({
            loading: false,
            data: data
        });
    }
    
    render() {
        let content = this.state.loading ? <Loading width="100" height="100" step="30"/> : this.dataRender(this.state.data);
        return (
            <div className="wf-component">
                <h1>{this.props.title ?? "Default Title"}</h1>
                {content}
            </div>);
    }
}