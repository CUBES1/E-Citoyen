import React, {Component, Fragment} from 'react';
import {NavItem, NavLink} from 'reactstrap';
import {Button, NavDropdown} from 'react-bootstrap';
import {MenuItem} from '@mui/material';
import {Link} from 'react-router-dom';
import authService from './AuthorizeService';
import {ApplicationPaths} from './ApiAuthorizationConstants';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

export class LoginMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null,
            userId: null,
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name,
            userId: user && user.sub
        });
    }

    render() {
        const {isAuthenticated, userName, userId} = this.state;
        if (!isAuthenticated) {
            const registerPath = `${ApplicationPaths.Register}`;
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(registerPath, loginPath);
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const ressourcesPath = `${ApplicationPaths.MyRessources}`;
            const logoutPath = {pathname: `${ApplicationPaths.LogOut}`, state: {local: true}};
            return this.authenticatedView(userName, profilePath, logoutPath, ressourcesPath);
        }
    }

    authenticatedView(userName, profilePath, logoutPath, ressourcesPath) {
        return (<Fragment>
                <NavItem className="addRessources">
                    <NavLink tag={Link}>
                        <Link to={"/new-ressource"}>
                            <Button variant="secondary">
                                <AddCircleOutlineIcon fontSize="medium" className="iconAddMargin"/>
                                Ajouter un ressource
                            </Button>
                        </Link>
                    </NavLink>
                </NavItem>
                <NavDropdown alignRight eventKey={1}
                             title={
                                 <div className="pull-left">
                                     <img className="avatarNavBar"
                                          src={this.props.avatar}
                                          alt="user pic"
                                     />
                                 </div>
                             }
                             id="basic-nav-dropdown">

                    <MenuItem eventKey={1.1}>
                        <NavLink tag={Link} className="text-dark" to={{
                            pathname: `/profile/${this.state.userId}`,
                            state: {rUserId: this.state.userId}
                        }}>Profile
                        </NavLink>
                    </MenuItem>
                    <MenuItem eventKey={1.1}>
                        <NavLink tag={Link} className="text-dark" to={profilePath}>Param??tres</NavLink>
                    </MenuItem>
                    <MenuItem eventKey={1.1}>
                        <NavLink tag={Link} className="text-dark" to="/mes-ressources">Mes ressources</NavLink>
                    </MenuItem>
                    <MenuItem eventKey={1.2}>
                        <NavLink tag={Link} className="text-dark" to={logoutPath}><Button
                            variant="primary">Deconnexion</Button></NavLink>
                    </MenuItem>

                    <NavLink tag={Link} className="text-dark"
                             style={{
                                 fontSize: "12px",
                                 textDecoration: "underline",
                                 marginBottom: "-15px",
                                 marginTop: "-10px"
                             }} to="/mentions-legales">Mentions l??gales</NavLink>
                    <NavLink tag={Link} className="text-dark"
                             style={{fontSize: "12px", textDecoration: "underline", marginBottom: "-15px"}}
                             to="/condition-utilisation">Conditions d???utilisation</NavLink>
                </NavDropdown>
            </Fragment>
        );

    }

    anonymousView(registerPath, loginPath) {
        return (<Fragment>
            <NavDropdown alignRight
                         title={
                             <div className="pull-left">
                                 <AdminPanelSettingsOutlinedIcon fontSize="large" className="iconAddMargin"/>
                             </div>}
                         id="basic-nav-dropdown">
                <NavLink tag={Link} className="text-dark"
                         style={{fontSize: "12px", textDecoration: "underline", marginBottom: "-15px", marginTop: "-15px"}}
                         to="/mentions-legales">Mentions l??gales</NavLink>
                <NavLink tag={Link} className="text-dark"
                         style={{fontSize: "12px", textDecoration: "underline", marginBottom: "-15px"}}
                         to="/condition-utilisation">Conditions d???utilisation</NavLink>
            </NavDropdown>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={registerPath}><Button variant="primary">Cr??er un
                    compte</Button></NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={loginPath}><Button
                    variant="secondary">S'identifier</Button></NavLink>
            </NavItem>
        </Fragment>);
    }
}

