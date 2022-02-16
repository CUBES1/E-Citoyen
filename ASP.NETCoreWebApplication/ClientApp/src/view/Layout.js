import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {NavMenu} from '../components/NavMenu';


export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu goBack={this.props.goBack} title={this.props.title} subtitle={this.props.subtitle} isConnected={false} />
                <div className="mainContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
