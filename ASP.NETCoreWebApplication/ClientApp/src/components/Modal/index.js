import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

const caseList =
    [
        {
            id: "signal",
            title: "Signalement",
            body: "Êtes-vous sûr de vouloir signaler cette ressource ?",
            valide: "Signaler",
        },
        {
            id: "delete",
            title: "Supprimer",
            body: "Êtes-vous sûr de vouloir supprimer cette ressource ?",
            valide: "Supprimer",
        }
    ]

class ModalCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseTitle: '',
            caseBody: '',
            caseValide: '',

        };
    }

    closeModal = (event, cas) => {
        if (event === null) {
            this.props.callBack(cas);
        } else {
            this.props.callBack(cas);
            event.preventDefault();
        }
    }


    render() {
        return (
            <>

                <Modal show={this.props.isOpen} onHide={() => this.closeModal(null, "close")}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.case ? caseList[caseList.findIndex(item => item.id === this.props.case)].title : ''}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.case ? caseList[caseList.findIndex(item => item.id === this.props.case)].body : ''}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={(e) => this.closeModal(e, 'close')}>
                            Annuler
                        </Button>
                        <Button variant="primary" onClick={(e) => this.closeModal(e, this.props.case)}>
                            {this.props.case ? caseList[caseList.findIndex(item => item.id === this.props.case)].valide : ''}
                        </Button>
                    </Modal.Footer>
                </Modal>


            </>
        );
    }
}

export default ModalCustom;