import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardCustom from '../components/CardRessources'
import SideBarInfo from '../components/SideBarInfo'
import CardRessourcesListing from "../components/CardRessourcesListing";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Row className="cardContainer">
          <Row className="mainContainer">
            <CardRessourcesListing />
          </Row>
          <Row className="sideContainer">

            <SideBarInfo />

          </Row>
        </Row>
      </div >
    );
  }
}
