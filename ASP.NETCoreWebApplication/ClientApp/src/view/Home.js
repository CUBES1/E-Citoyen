import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import CardCustom from '../components/CardRessources'
import SideBarInfo from '../components/SideBarInfo'
import CardRessourcesListing from "../components/CardRessourcesListing";
import {Layout} from "../view/Layout"

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Layout title={"Aujourd'hui"} subtitle={"Les ressources dont vous avez besoin"}>
                    <Row className="cardContainer">
                        <Row className="mainContainer">
                            <CardRessourcesListing userOnly={false}/>
                        </Row>
                        <Row className="sideContainer">

                            <SideBarInfo/>

                        </Row>
                    </Row>
                </Layout>
            </div>
        );
    }
}
