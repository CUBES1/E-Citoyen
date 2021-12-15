import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardCustom from '../components/CardRessources'
import SideBarInfo from '../components/SideBarInfo'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Row className="cardContainer">
          <Row className="mainContainer">
            {
              ["Jean Dupont", "Amel Bent", "Rock You", "Idris Alba", "Jean Dupont", "Amel Bent", "Rock You", "Idris Alba", "Jean Dupont", "Amel Bent", "Rock You", "Idris Alba", "Jean Dupont", "Amel Bent", "Rock You", "Idris Alba"].map((x, i) =>
                <Col xs={11} md={4} className="g-4" align="center">

                  <CardCustom

                    username={x}
                    img={"https://via.placeholder.com/800x400.png/24A5AD/FFFFFF"}
                    title={"Je suis la ressource numéro qui s'appelle et j'aime" + i}
                    isLiked={i % 2 == 0 ? true : false}
                    isBookmark={i % 2 != 0 ? true : false}
                    dateTime={"03/12/2021 15:18"}
                  />

                </Col>
              )
            }
          </Row>
          <Row className="sideContainer">

            <SideBarInfo />

          </Row>
        </Row>
      </div >
    );
  }
}
