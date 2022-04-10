import React, {Component} from 'react';
import {Row, Col, Container, Card, Button} from 'reactstrap';
import getUserAuth from "../../helpers/getUserAuth";
import authService from "../../components/api-authorization/AuthorizeService";
import {Layout} from "../Layout"
import {Spinner} from "react-bootstrap";
import Avatar from "../../assets/avatar.png";
import axios from "axios";
import ToastCustom from "../../components/Toast";
import moment from "moment";

moment().format();

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_data: null,
            currentUser: null,
            isToaster: false,
            case: null,
        }
    }

    async componentDidMount() {
        /* Declaration of the user in session rn */
        const auth = await getUserAuth.isThisLoged();
        let user;
        if (auth) {
            user = await authService.getUser()
            user = user.sub
            await axios.get(`https://localhost:5001/api/User/${this.props.location.state.rUserId}`)
                .then(res => {
                    const data = res.data;
                    this.setState({user_data: data, currentUser: user});
                })
        }
        
        console.log(this.state.user_data)
        /* End For user in session statement*/
    }
    
    
    addFriend(e) {
        axios.post(`https://localhost:5001/api/Relation/${this.props.location.state.rUserId}`)
            .then((res => {
                console.log(res)
                if (res.data === 'L\'utilisateur est déjà dans votre liste d\'amis') {
                    this.setState({isToaster: true, case: 'addFriendAlready'})
                } else {
                    this.setState({isToaster: true, case: 'addFriendOk'})
                }
            }))
            .catch(err => {
                console.log(err)
                this.setState({isToaster: true, case: "addFriendNok"})
            })
        e.preventDefault();
    }

    handleCallbackToast = () => {
        this.setState({
            isToaster: false,
            case: null,
        });
    }

    goToRessources(e) {
        this.props.history.push({
            pathname: '/mes-ressources',
           
        })
        e.preventDefault()
    }


    render() {
        return (
            <Layout title={""} subtitle={""} goBack={() => this.props.history.goBack()}>
                {this.state.currentUser !== null ?
                    <Row className="profile-page">

                        <ToastCustom isOpen={this.state.isToaster} case={this.state.case}
                                     callBack={this.handleCallbackToast}/>

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
                                                <div
                                                    className="card-profile-actions py-4 mt-lg-0 center-block text-center">
                                                    {this.state.user_data.id !== this.state.currentUser ?
                                                        <Button
                                                            className="mx-4"
                                                            color="secondary"
                                                            href="#"
                                                            onClick={e => this.addFriend(e)}
                                                        >
                                                            <span style={{fontSize: 16}}>Entrer en relation</span>
                                                        </Button>
                                                        :
                                                        ""
                                                    }
                                                    {this.state.user_data.id !== this.state.currentUser ?
                                                        <Button
                                                            className="float-right"
                                                            color="default"
                                                            href="#"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Voir les ressources
                                                        </Button>
                                                        :
                                                        <Button
                                                            className="float-right"
                                                            color="default"
                                                            href="#"
                                                            onClick={e => this.goToRessources(e)}
                                                        >
                                                            Voir mes ressources
                                                        </Button>
                                                    }
                                                    
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
                                                {this.state.user_data.firstName}
                                                {' '}
                                                {this.state.user_data.lastName}
                                                <span className="font-weight-light">, {moment().diff(this.state.user_data.dateOfBirth, 'years')} ans</span>
                                            </h3>
                                            <div className="h6 font-weight-300">
                                                <i className="ni location_pin mr-2"/>
                                                {this.state.user_data.city ? this.state.user_data.city + ", " : ""}
                                                {this.state.user_data.country}
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