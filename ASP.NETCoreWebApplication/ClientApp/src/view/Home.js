import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import CardCustom from '../components/CardRessources'
import SideBarInfo from '../components/SideBarInfo'
import CardRessourcesListing from "../components/CardRessourcesListing";
import {Layout} from "../view/Layout"

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
        }
    }

    static displayName = Home.name;
    
    async componentDidMount() {
        let aUserId = null;
        aUserId = await AsyncLocalStorage.getItem('userId')
        this.setState({userId: aUserId})
    }

    render() {
        return (
            <div>
                <Layout title={"Aujourd'hui"} subtitle={"Les ressources dont vous avez besoin"}>
                    <Row className="cardContainer">
                        <Row className="mainContainer">
                            <CardRessourcesListing userOnly={false} userId={AsyncLocalStorage.getItem('userId')}
                                                   canEdit={false}/>
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
