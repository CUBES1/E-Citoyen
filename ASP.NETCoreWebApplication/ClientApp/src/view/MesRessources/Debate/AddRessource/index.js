import React from 'react';
import axios from 'axios';
import {Row, Toast, ToastContainer} from "react-bootstrap"
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
            VisibilityIndex: 0,
            Visibility: 'Public',
            Genre: '',
            optionsCat: [
                {value: 'noDB', label: 'loading...'},
            ],
            GenreIndex: null,
            attachment: null,
            toastType: 'error',
            isToast: false,
        }
    }

    Adddebate = async () => {
        let id = null;
        let history = this.props.history;
        
        await axios.post('https://localhost:5001/api/Post', {
            Title: this.state.Title,
            Age: this.state.Age,
            Description: this.state.Description,
            resourceCategoryId: this.state.optionsCat[this.state.GenreIndex].value,
            Visibility: this.state.VisibilityIndex,
            UserId: this.state.currentUser
        })
            .then((res) => {
                id = res.data.id;
                this.setState({toastType: 'success', isToast: true});
            })
            .catch(error => {
                this.setState({toastType: 'error', isToast: true})
            })

       
        setTimeout(function () {
            if (id !== null) {
                history.push('/ressource/' + id)
            }
        }, 3000); /* DONT LOOK AT THIS, ITS ONLY TO LET THE TIME TO SEE THE TOAST - NOT FOR PROD USE*/

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

    handleChangeSelect = async (selectedOption, who) => {
        let indexSelect;

        switch (who) {
            case ("Visibility"):
                indexSelect = optionsVis.findIndex((e) => e.label === selectedOption.label)
                break;
            case ("Genre"):
                indexSelect = this.state.optionsCat.findIndex((e) => e.label === selectedOption.label)
                break;
        }

        await this.setState({
            [who + "Index"]: indexSelect,
            [who]: selectedOption.value,
        })

    };


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

        await axios.get('https://localhost:5001/api/ResourceCategory')
            .then(res => {
                let options = [];
                res.data.forEach(element => {
                    options.push({value: element.id, label: element.label})
                });
                this.setState({optionsCat: options})
            })
        console.log(this.state.optionsCat)
    }

    render() {
        return (
            <>
                <ToastContainer className="p-3" position={"bottom-start"}>
                    <Toast onClose={() => this.setState({isToast: false})} show={this.state.isToast} delay={10000}
                           autohide>
                        <Toast.Header
                            style={{backgroundColor: this.state.toastType === "success" ? "#00cb51" : "#cb1100"}}>
                            {/*<span style={{width: 20, height: 20, backgroundColor: 'green', borderRadius: 5}}/>*/}
                            <strong className="me-auto"
                                    style={{color: 'black'}}>{this.state.toastType === "success" ? "Votre ressource a été créée" : "Erreur lors de la création"}</strong>
                            <small style={{color: '#1c1c1c'}}>à l'instant</small>
                        </Toast.Header>
                        <Toast.Body>{this.state.toastType === "success" ? "Votre ressource à été créée avec succès" : "Votre ressource n'a pas pu être créée"}</Toast.Body>
                    </Toast>
                </ToastContainer>
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
                                            value={[this.state.optionsCat[this.state.GenreIndex]]}
                                            defaultValue={[this.state.optionsCat[this.state.GenreIndex]]}
                                            placeholder={"Séléctionner"}
                                            name="Genre"
                                            onChange={(s) => this.handleChangeSelect(s, "Genre")}
                                            options={this.state.optionsCat}
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
                                                fontSize={"large"} color={"primary"}
                                                style={{color: "#00cba9"}}/></Label>
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
                                                fontSize={"large"} color={"primary"}
                                                style={{color: "#00cba9"}}/></Label>
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
            </>
        )
            ;
    }
}