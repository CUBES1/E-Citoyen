import React, { Component } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from '../api-authorization/LoginMenu';
import './NavMenu.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Avatar from '../../assets/avatar.png'
import { ReactComponent as Logo } from '../../assets/wave.svg';

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
              <a href="/" style={{ color: 'black', textDecoration: "none" }}>
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
                  [<Button variant="secondary"><AddCircleOutlineIcon fontSize="medium" /> Ajouter un ressource</Button>,
                  <img alt="user_profil" src={Avatar} className="avatarNavBar" />]
                }
              </Nav>

            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>
    );
  }
}
