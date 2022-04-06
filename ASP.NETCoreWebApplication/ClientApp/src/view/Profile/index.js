import React, {Component} from 'react';
import {Row, Col, Container, Card, Button} from 'reactstrap';
import getUserAuth from "../../helpers/getUserAuth";
import authService from "../../components/api-authorization/AuthorizeService";
import {Layout} from "../Layout"
import {Spinner} from "react-bootstrap";
import Avatar from "../../assets/avatar.png";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
        }
    }

    async componentDidMount() {
        /* Declaration of the user in session rn */
        const auth = await getUserAuth.isThisLoged();
        let user;

        if (auth) {
            user = await authService.getUser()
            user = user.sub
        }
        await this.setState({currentUser: user})
        /* End For user in session statement*/

        /* TODO get user info with currentUser var*/
    }


    render() {
        return (
            <Layout title={""} subtitle={""} goBack={() => this.props.history.goBack()}>
                {this.state.currentUser !== null ?
                    <Row className="profile-page">

                        <section className="section">
                            <Container>
                                <Card className="card-profile shadow mt--300">
                                    <div className="px-4">
                                        <Row className="justify-content-center">
                                            <Col className="order-lg-2" lg="3">
                                                <div className="card-profile-image">
                                                    <a href="#" onClick={e => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={Avatar}
                                                        />
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col
                                                className="order-lg-3 text-lg-right align-self-lg-center" 
                                                lg="4"
                                            >
                                                <div className="card-profile-actions py-4 mt-lg-0 center-block text-center">
                                                    <Button
                                                        className="mx-4"
                                                        color="secondary"
                                                        href="#"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        <span style={{fontSize: 16}}>Entrer en relation</span>
                                                    </Button>
                                                    <Button
                                                        className="float-right"
                                                        color="default"
                                                        href="#"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Voir les ressources
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col className="order-lg-1" lg="4">
                                                <div className="card-profile-stats d-flex justify-content-center">
                                                    <div>
                                                        <span className="heading">2</span>
                                                        <span className="description">Relations</span>
                                                    </div>
                                                    <div>
                                                        <span className="heading">18</span>
                                                        <span className="description">Ressources</span>
                                                    </div>

                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center mt-5">
                                            <h3>
                                                John Snow
                                                <span className="font-weight-light"> , 27 ans</span>
                                            </h3>
                                            <div className="h6 font-weight-300">
                                                <i className="ni location_pin mr-2"/>
                                                Centre-Val-de-Loire, France
                                            </div>
                                        </div>
                                        <div className="mt-5 py-5 border-top text-center">
                                            <Row className="justify-content-center">
                                                <Col lg="9">
                                                    <p>
                                                        This is a bio, I like when it's bio
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Card>
                            </Container>
                        </section>
                    </Row>
                    :
                    <Spinner className="customLoading2" animation="grow" size="sm" variant="secondary"/>
                }

            </Layout>
        );
    }
}

export default Profile;