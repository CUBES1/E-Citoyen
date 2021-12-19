import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: '',
            Genre: ''
        }
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/Debate/?id='+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Title: response.data.Title,
                    ReleaseDate: response.data.ReleaseDate,
                    Genre: response.data.Genre });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeReleaseDate(e) {
        this.setState({
            ReleaseDate: e.target.value
        });
    }
    onChangeGenre(e) {
        this.setState({
            Genre: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            Id:this.props.match.params.id,
            Title: this.state.Title,
            ReleaseDate: this.state.ReleaseDate,
            Genre: this.state.Genre

        };
        axios.post('https://localhost:5001/api/Debat/', obj)
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/api/Debat')
    }
    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Debate Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="Title" sm={2}>Title</Label>
                            <Col sm={10}>
                                <Input type="text" name="Title" value={this.state.Title} onChange={this.onChangeTitle}
                                       placeholder="Enter Title" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Genre" sm={2}>Genre</Label>
                            <Col sm={10}>
                                <Input type="text" name="Genre" value={this.state.Genre} onChange={this.onChangeGenre} placeholder="Enter Genre" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }

}

export default Edit;  
