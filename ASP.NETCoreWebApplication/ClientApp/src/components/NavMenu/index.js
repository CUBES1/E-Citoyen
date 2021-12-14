import React, { Component } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { LoginMenu } from '../api-authorization/LoginMenu';
import './NavMenu.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Avatar from '../../assets/avatar.png'
import { ReactComponent as Logo } from '../../assets/wave.svg';
import AddDebate from "../Debate/AddDebate";
import EditDebate from "../Debate/EditDebate";
import DebateList from "../Debate/DebateList";
import {Debate} from "../Debate";

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
        <Logo fill={"#00cba9"} className="background" />
        <Navbar>
          <Container>
            <Navbar.Brand>
              <a href="/" style={{color: 'black', textDecoration: "none"}}>
                <p className="mainTitle">{this.props.title}</p>
                <p className="subTitle">{this.props.subtitle}</p>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                {!this.props.isConnected ?
                  <LoginMenu>
                  </LoginMenu>
                  :
                  [<Button variant="secondary"><AddCircleOutlineIcon fontSize="medium" /> Ajouter une ressource</Button>,
                  <img alt="user_profil" src={Avatar} className="avatarNavBar" />]
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <div className="container">
              <ul >
                <li>
                  <Link to={'/Debate'}>Debate</Link>
                </li>
              </ul>
            </div>
            <br/>
            <Switch>
              <Route exact path='/Debate' component={Debate}/>
            </Switch>
        </Router>
      </div>
    );
  }
}
