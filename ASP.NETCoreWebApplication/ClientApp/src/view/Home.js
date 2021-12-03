import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardCustom from '../components/CardCustom'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Row className="cardContainer">
          <Row className="mainContainer">
            {
              ["Jean Dupont", "Amel Bent", "Rock You", "Idris Alba", "Jean Dupont", "Amel Bent", "Rock You", "Idris Alba", "Jean Dupont", "Amel Bent", "Rock You", "Idris Alba", "Jean Dupont", "Amel Bent", "Rock You", "Idris Alba"].map((x, i) =>
                <Col xs={11} md={4} className="g-4">

                  <CardCustom

                    username={x}
                    img={"https://via.placeholder.com/800x400.png/24A5AD/FFFFFF"}
                    title={"Je suis la ressource numéro qui s'appelle et j'aime" + i}
                    isLiked={i % 2 == 0 ? true : false}
                    isBookmark={i % 2 != 0 ? true : false}
                    dateTime={new Date().toLocaleString()}
                  />

                </Col>
              )
            }
          </Row>
          <Row className="sideContainer">

            <Card>
              <p>Test</p>
            </Card>

          </Row>
        </Row>
      </div >
    );
  }
}
