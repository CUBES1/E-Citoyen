import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../components/NavMenu';


export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu title={"Aujourd'hui"} subtitle={"Les ressources dont vous avez besoin"} isConnected={false} />
        <div className="mainContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
