import React from 'react';
import axios from 'axios';
import {Row} from "react-bootstrap"
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Layout} from "../../../Layout"

export default class AddDebate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Genre: '',
            Age: ''
        }
    }

    Adddebate = () => {
        const userId = localStorage.getItem('userId');
        axios.post('https://localhost:5001/api/Debat', {
            Title: this.state.Title,
            Genre: this.state.Genre,
            Age: this.state.Age,
            UserId: userId
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

    render() {
        return (
            <Layout title={"Créer une ressource"} subtitle={"Partager avec qui vous voulez ce que vous souhaitez"}>
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