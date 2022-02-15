import React, {Component} from 'react';
import {Navbar, Container, Button, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from 'react-router-dom';
import {LoginMenu} from '../api-authorization/LoginMenu';
import './NavMenu.css';
import Avatar from '../../assets/avatar.png'
import {Debate} from "../../view/MesRessources/Debate";
import {ReactComponent as Logo} from '../../assets/wave.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }


    render() {


        return (
            <div>
                <Logo fill={"#00cba9"} className="background"/>
                <Navbar collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Brand>
                            {this.props.goBack ?
                                <Link to="/" style={{color: 'black', textDecoration: "none"}}>
                                        <ArrowBackIcon style={{display: "inline-block", fontSize: "38px"}}/>
                                </Link>
                                :
                                <Link to="/" style={{color: 'black', textDecoration: "none"}}>
                                        <p className="mainTitle" style={{display: "inline-block"}}>{this.props.title}</p>
                                        <p className="subTitle">{this.props.subtitle}</p>
                                  
                                </Link>}

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <LoginMenu avatar={Avatar}>
                                </LoginMenu>
                            </Nav>

                        </Navbar.Collapse>

                    </Container>
                </Navbar>

            </div>
        );
    }
}
