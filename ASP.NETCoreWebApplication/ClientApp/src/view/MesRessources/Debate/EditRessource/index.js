import React from 'react';
import axios from 'axios';
import {Row} from "react-bootstrap"
import {Container, Col, Form, FormGroup, Label, Input, Button, Tooltip} from 'reactstrap';
import {Layout} from "../../../Layout"
import getUserAuth from "../../../../helpers/getUserAuth";
import authService from "../../../../components/api-authorization/AuthorizeService";
import Select from 'react-select';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';

const optionsCat = [
    {value: 'actualites', label: 'Actualités'},
    {value: 'etudiant', label: 'Etudiants'},
    {value: 'grouvenerment', label: 'Gouvernement'}
]

const optionsVis = [
    {value: 'Public', label: 'Publique'},
    {value: 'Privé', label: 'Privé'},
    {value: 'Relation', label: 'Relations'}
]

export default class Edit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rId: '',
            Title: '',
            Age: 0,
            Description: '',
            currentUser: '', /* A modifier car si null normalement pas possible */
            tooltipVideoOpen: false,
            tooltipImageOpen: false,
            tooltipDocumentOpen: false,
            VisibilityIndex: 0,
            Visibility: 'Public',
            Genre: '',
            GenreIndex: null,
            attachment: null,
        }
    }

    UpdateRessource = () => {
        axios.put(`https://localhost:5001/api/Post/${this.state.rId}`, {
            title: this.state.Title,
            id: this.state.rId,
            age: this.state.Age,
            description: this.state.Description,
            userId: this.state.currentUser,
            visibility: this.state.VisibilityIndex,
        })
            .then(() => {
                {
                    alert("Data Save Successfully");
                }
            })
    }

    handleChange = (e, x) => {
        let name;
        let value;


        if (e.value !== undefined) {
            name = x;
            value = e.value;
        } else {
            name = e.target.name;
            value = e.target.value;
        }

        this.setState({[name]: value});
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

        /* Populate from params */
        await this.setState({
            rId: this.props.location.data.id,
            Title: this.props.location.data.title,
            Age: 0,
            Description: this.props.location.data.description,
            GenreIndex: this.props.location.data.categorie,
            VisibilityIndex: this.props.location.data.visibility,
        })
        /* Ends of populate from params */
    }

    handleChangeSelect = async (selectedOption, who) => {
        let indexSelect;
        
        switch (who) {
            case ("Visibility"):
                indexSelect = optionsVis.findIndex((e) => e.label === selectedOption.label)
                break;
            case ("Genre"):
                indexSelect = optionsCat.findIndex((e) => e.label === selectedOption.label)
                break;
        }
        
        await this.setState({
            [who + "Index"]: indexSelect,
            [who]: selectedOption.value,
        })
        
    };

    render() {
        return (
            <Layout title={"Ressource"} subtitle={""} goBack={() => this.props.history.goBack()}>
                <div className="container" style={{margin: "auto", maxWidth: "900px"}}>
                    <h1>Modifier votre ressource</h1>
                    <Row xs={11} md={12} className="g-4 m-1">

                        <Row>
                            <Row className={"px-0"}>
                                <Col xs={7}>
                                    <Label for="name" sm={2}>Titre</Label>
                                    <Input type="text" name="Title" onChange={this.handleChange}
                                           value={this.state.Title} className="form-control"
                                           placeholder="Donner un titre a votre ressource"/>
                                </Col>


                                <Col>
                                    <Label for="name" sm={2}>Catégorie</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        isSearchable
                                        value={[optionsCat[this.state.GenreIndex]]}
                                        defaultValue={[optionsCat[this.state.GenreIndex]]}
                                        placeholder={"Séléctionner"}
                                        name="Genre"
                                        onChange={(s) => this.handleChangeSelect(s, "Genre")}
                                        options={optionsCat}
                                        style={{width: "100%", paddingLeft: 0}}
                                    />
                                </Col>

                                <Col>
                                    <Label for="name" sm={2}>Visibilité</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        value={[optionsVis[this.state.VisibilityIndex]]}
                                        defaultValue={[optionsVis[this.state.VisibilityIndex]]}
                                        name="Visibility"
                                        onChange={(s) => this.handleChangeSelect(s, "Visibility")}
                                        options={optionsVis}
                                        style={{width: "100%", paddingLeft: 0}}
                                    />
                                </Col>
                            </Row>


                            <Row className={"mt-4"}>
                                <Label for="name" sm={2}>Description</Label>
                                <Input type="textarea" name="Description" rows={8} onChange={this.handleChange}
                                       value={this.state.Description} className="form-control"
                                       placeholder="Que souhaitez vous dire ?"/>


                            </Row>


                        </Row>


                        <Row className={"mt-4"} align="center">
                            <Col sm={12}>
                                <button type="button" onClick={this.UpdateRessource}
                                        className="btn btn-primary">Mettre à jour
                                </button>
                            </Col>
                            <Col className={"mt-2"} style={{lineHeight: "10px"}}>
                                <span style={{fontStyle: "italic", fontSize: "11px", color: "#a1a7ad"}}>En mettant à jour cette ressource<br/> j'affirme qu'elle respecte les rêgles de la plateforme</span>
                            </Col>
                        </Row>


                    </Row>
                </div>
            </Layout>
        )
            ;
    }
}