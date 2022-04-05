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
    {value: 'drole', label: 'Drôle'}
]

const optionsVis = [
    {value: 'Public', label: 'Publique'},
    {value: 'Privé', label: 'Privé'},
    {value: 'Relation', label: 'Relations'}
]

export default class AddDebate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Age: 0,
            Description: '',
            currentUser: '', /* A modifier car si null normalement pas possible */
            tooltipVideoOpen: false,
            tooltipImageOpen: false,
            tooltipDocumentOpen: false,
            Visibility: 'Public',
            attachment: null,
        }
    }

    Adddebate = () => {
        axios.post('https://localhost:5001/api/Post', {
            Title: this.state.Title,
            Age: this.state.Age,
            Description: this.state.Description,
            UserId: this.state.currentUser
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
    }

    render() {
        return (
            <Layout title={"Créer une ressource"} subtitle={"Partager avec qui vous voulez ce que vous souhaitez"}>
                <div className="container" style={{margin: "auto", maxWidth: "900px"}}>
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
                                        isClearable
                                        placeholder={"Séléctionner"}
                                        name="Genre"
                                        onChange={(e) => this.handleChange(e, "Genre")}
                                        options={optionsCat}
                                        style={{width: "100%", paddingLeft: 0}}
                                    />
                                </Col>

                                <Col>
                                    <Label for="name" sm={2}>Visibilité</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={[optionsVis[0]]}
                                        name="Visibility"
                                        onChange={(e) => this.handleChange(e, "Visibility")}
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


                            <Row className={"mt-4"}>
                                <span>Attachez un élément</span>
                                <Row className={"mt-2"}>

                                    <Col xs={1}>
                                        <Label for="Image" id="imageButton"><ImageOutlinedIcon
                                            fontSize={"large"} style={{color: "#00cba9"}}/></Label>
                                        <Tooltip
                                            isOpen={this.state.tooltipImageOpen}
                                            placement="bottom-start"
                                            target="imageButton"
                                            toggle={() => {
                                                this.setState({tooltipImageOpen: !this.state.tooltipImageOpen})
                                            }}>
                                            Ajouter une photo
                                        </Tooltip>
                                        <Input type="file" name="attachment" id="Image" className=""
                                               style={{display: "none"}}
                                               onChange={this.handleChange}
                                               accept=".png, .jpg, .jpeg"/>
                                    </Col>

                                    <Col xs={1}>
                                        <Label for="Document" id="documentButton"><ArticleOutlinedIcon
                                            fontSize={"large"} color={"primary"} style={{color: "#00cba9"}}/></Label>
                                        <Tooltip
                                            isOpen={this.state.tooltipDocumentOpen}
                                            placement="bottom-start"
                                            target="documentButton"
                                            toggle={() => {
                                                this.setState({tooltipDocumentOpen: !this.state.tooltipDocumentOpen})
                                            }}>
                                            Ajouter un document (PDF)
                                        </Tooltip>
                                        <Input type="file" name="attachment" id="Document" className=""
                                               style={{display: "none"}}
                                               onChange={this.handleChange}
                                               accept=".pdf"/>
                                    </Col>

                                    <Col xs={1}>
                                        <Label for="Video" id="videoButton"><VideoCameraBackOutlinedIcon
                                            fontSize={"large"} color={"primary"} style={{color: "#00cba9"}}/></Label>
                                        <Tooltip
                                            isOpen={this.state.tooltipVideoOpen}
                                            placement="bottom-start"
                                            target="videoButton"
                                            toggle={() => {
                                                this.setState({tooltipVideoOpen: !this.state.tooltipVideoOpen})
                                            }}>
                                            Ajouter une vidéo
                                        </Tooltip>
                                        <Input type="file" name="attachment" id="Video" className=""
                                               style={{display: "none"}}
                                               onChange={this.handleChange}
                                               accept=".mp4, .mov"/>
                                    </Col>

                                </Row>

                            </Row>
                        </Row>


                        <Row className={"mt-4"} align="center">
                            <Col sm={12}>
                                <button type="button" onClick={this.Adddebate}
                                        className="btn btn-primary">Publier la ressource
                                </button>
                            </Col>
                            <Col className={"mt-2"} style={{lineHeight: "10px"}}>
                                <span style={{fontStyle: "italic", fontSize: "11px", color: "#a1a7ad"}}>En publiant cette ressource<br/> j'affirme qu'elle respecte les rêgles de la plateforme</span>
                            </Col>
                        </Row>


                    </Row>
                </div>
            </Layout>
        )
            ;
    }
}