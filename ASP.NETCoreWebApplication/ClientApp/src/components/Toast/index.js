import React, {Component} from 'react';
import {Toast, ToastContainer} from "react-bootstrap";

const caseList =
    [
        {
            id: "signal",
            title: "Signalement",
            body: "La ressource à bien été signaler",
            color: "rgba(0, 203, 81, 0.62)",
        },
        {
            id: "createRessourceOk",
            title: "Création ressource",
            body: "Votre ressource a été créer avec succès",
            color: "rgba(0, 203, 81, 0.62)",
        },
        {
            id: "createRessourceNok",
            title: "Création ressource",
            body: "Votre ressource n'a pas pus être créer",
            color: "rgba(255, 0, 4, 0.62)",
        },
        {
            id: "deleteRessourceOk",
            title: "Supression ressource",
            body: "Votre ressource a été supprimer avec succès",
            color: "rgba(0, 203, 81, 0.62)",
        },
        {
            id: "deleteRessourceNok",
            title: "Supression ressource",
            body: "Votre ressource n'a pas pus être supprimer",
            color: "rgba(255, 0, 4, 0.62)",
        }
    ]

class ToastCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    trigger = (event) => {
        this.props.callBack();
    }
    
    render() {
        return (
            <ToastContainer className="p-3" position={"bottom-start"}>
                <Toast onClose={(e) => this.trigger(e)} show={this.props.isOpen} delay={3000} autohide>
                    <Toast.Header
                        style={{backgroundColor: this.props.case ? caseList[caseList.findIndex(item => item.id === this.props.case)].color : ''}}>
                        <strong className="me-auto"
                                style={{color: 'black'}}>{this.props.case ? caseList[caseList.findIndex(item => item.id === this.props.case)].title : ''}</strong>
                        <small style={{color: '#1c1c1c'}}>à l'instant</small>
                    </Toast.Header>
                    <Toast.Body>{this.props.case ? caseList[caseList.findIndex(item => item.id === this.props.case)].body : ''}</Toast.Body>
                </Toast>
            </ToastContainer>
        );
    }
}

export default ToastCustom;