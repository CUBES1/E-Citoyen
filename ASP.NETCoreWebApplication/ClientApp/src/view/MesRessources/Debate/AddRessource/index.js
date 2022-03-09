﻿import React from 'react';
import axios from 'axios';
import {Row} from "react-bootstrap"
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Layout} from "../../../Layout"
import getUserAuth from "../../../../helpers/getUserAuth";
import authService from "../../../../components/api-authorization/AuthorizeService";

export default class AddDebate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Genre: '',
            Age: '',
            Text: '',
            currentUser: '', /* A modifier car si null normalement pas possible */
        }
    }

    Adddebate = () => {
        axios.post('https://localhost:5001/api/Post', {
            Title: this.state.Title,
            Genre: this.state.Genre,
            Age: this.state.Age,
            Text: this.state.Text,
            UserId: this.state.currentUser
        })
            .then(() => {
                {
                    alert("Data Save Successfully");
                }
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
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
    }

    render() {
        return (
            <Layout title={"Créer une ressource"} subtitle={"Partager avec qui vous voulez ce que vous souhaitez"} >
                <Row style={{margin: "20px"}}>
                    <h4 className="PageHeading">Enter Debate Informations</h4>
                    <Form className="form">
                        <Col>
                            <FormGroup row>
                                <Label for="name" sm={2}>Title</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Title" onChange={this.handleChange}
                                           value={this.state.Title} placeholder="Enter Title"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Genre" sm={2}>Genre</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Genre" onChange={this.handleChange}
                                           value={this.state.Genre} placeholder="Enter Genre"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Age" sm={2}>Age</Label>
                                <Col sm={10}>
                                    <Input type="number" name="Age" onChange={this.handleChange} value={this.state.Age}
                                           placeholder="Enter Age"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Text" sm={2}>Text</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Text" onChange={this.handleChange} value={this.state.Text}
                                           placeholder="A quoi pensez vous ?"/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <Col sm={5}>
                                </Col>
                                <Col sm={1}>
                                    <button type="button" onClick={this.Adddebate} className="btn btn-success">Submit
                                    </button>
                                </Col>
                                <Col sm={1}>
                                    <Button color="danger">Cancel</Button>{' '}
                                </Col>
                                <Col sm={5}>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Form>
                </Row>
            </Layout>
        );
    }
}