import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AddDebate from "./AddRessource";
import EditDebate from "./EditRessource";
import DebateList from "./DebateList";
import './debate.css';
import React, {Component} from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {Button, Row} from "react-bootstrap";
import CardRessourcesListing from "../../../components/CardRessourcesListing";
import {Layout} from "../../Layout"
export class Ressources extends Component {
    static displayName = Ressources.name;


    render() {
        return (
            <div>
                <Layout title={"Mes ressources"} subtitle={"Administrez vos ressources d'un simple coup d'oeil"}>
                    <Row style={{margin: "20px"}}>
                        <CardRessourcesListing userOnly={true}/>
                    </Row>
                    {/*<Link to={"/new-ressource"}>
                    <Button variant="secondary" to={"/AddDebate"}>
                        <AddCircleOutlineIcon fontSize="medium" className="iconAddMargin"/>
                        Ajouter un ressource
                    </Button>
                </Link>*/}
                    {/* <div className="container">
                    <nav className="navbar navbar-expand-lg navheader">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li>
                                    <Link to={'/AddDebate'}>Add Debate</Link>
                                </li>
                                <li>
                                    <Link to={'/DebateList'}>Debate List</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>*/
                    }
                </Layout>
            </div>
        )
            ;
    }
}