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
            optionsCat: [{value: 'noDB', label: 'Loading...'}],
            toastType: 'error',
            isToast: false,
        }
    }

    UpdateRessource = async () => {

        let id = null;
        let history = this.props.history;
        
        await axios.put(`https://localhost:7155/api/Publication`, {
            title: this.state.Title,
            id: this.state.rId,
            description: this.state.Description,
            userId: this.state.currentUser,
            resourceCategoryId: this.state.Genre,
            visibility: this.state.VisibilityIndex,
        })
            .then((res) => {
                id = this.state.rId;
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

        await axios.get('https://localhost:7155/api/Resource/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    rId: res.data.id,
                    Title: res.data.title,
                    Age: res.data.age,
                    Description: res.data.description,
                    VisibilityIndex: res.data.visibility,
                    Visibility: res.data.visibility === 0 ? 'Public' : 'Privé',
                    CategorieId: res.data.resourceCategoryId,
                    attachment: res.data.attachment,
                })
            })
            .catch(err => {
                console.log(err)
            })


        await axios.get('https://localhost:7155/api/ResourceCategory')
            .then(res => {
                let options = [];
                res.data.forEach(element => {
                    options.push({value: element.id, label: element.label})
                });
                this.setState({optionsCat: options})
            })
        
        let sRessourceId = this.state.optionsCat.findIndex((e) => e.value === this.state.CategorieId);
        this.setState({GenreIndex: sRessourceId, Genre: this.state.optionsCat[sRessourceId].value})
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
                                    style={{color: 'black'}}>{this.state.toastType === "success" ? "Votre ressource a été modifiée" : "Erreur lors de la modification de votre ressource"}</strong>
                            <small style={{color: '#1c1c1c'}}>à l'instant</small>
                        </Toast.Header>
                        <Toast.Body>{this.state.toastType === "success" ? "Votre ressource à été modifiée avec succès" : "Votre ressource n'a pas pu être modifiée"}</Toast.Body>
                    </Toast>
                </ToastContainer>

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
            </>
        )
            ;
    }
}