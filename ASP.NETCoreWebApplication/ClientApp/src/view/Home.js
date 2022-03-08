import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import SideBarInfo from '../components/SideBarInfo'
import CardRessourcesListing from "../components/CardRessourcesListing";
import {Layout} from "./Layout";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
        }
    }

    static displayName = Home.name;

    async componentDidMount() {

    }

    render() {
        return (
            <div>
                <Layout title={"Aujourd'hui"} subtitle={"Les ressources dont vous avez besoin"}>
                    <Row className="cardContainer">
                        <Row className="mainContainer">
                            <CardRessourcesListing userOnly={false} canEdit={false}/>
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
