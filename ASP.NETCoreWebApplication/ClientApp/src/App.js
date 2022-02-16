import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Layout} from './view/Layout';
import {Home} from './view/Home';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import {ApplicationPaths} from './components/api-authorization/ApiAuthorizationConstants';
import './App.scss';
import './custom.css'
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Ressources} from "./view/MesRessources/Debate";
import AddDebate from "./view/MesRessources/Debate/AddRessource";
import EditDebate from "./view/MesRessources/Debate/EditRessource";
import DebateList from "./view/MesRessources/Debate/DebateList";
import Ressource from "./view/Ressource"


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
               
                <Route exact path='/' component={Home}/>
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes}/>

                
                <Route exact path='/mes-ressources' component={Ressources}/>
                <Route exact path='/new-ressource' component={AddDebate}/>
                <Route path='/edit-ressource/:id' component={EditDebate}/>
                
                
                <Route path='/ressource/:id' component={Ressource}/>
                
            </>
        );
    }
}
