import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './view/Layout';
import {Home} from './view/Home';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import {ApplicationPaths} from './components/api-authorization/ApiAuthorizationConstants';
import './App.scss';
import './custom.css'
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Debate} from "./components/Debate";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <AuthorizeRoute path='/fetch-data' component={FetchData}/>
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes}/>
                <Route exact path='/mes-ressources' component={Debate}/>
            </Layout>
        );
    }
}
