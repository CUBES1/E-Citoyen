import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AddDebate from "./AddDebate";
import EditDebate from "./EditDebate";
import DebateList from "./DebateList";
import './debate.css';
import React, {Component} from "react";

export class Debate extends Component {
    static displayName = Debate.name;

    render() {
        return (
            <Router>
                <div className="container">
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
                    <br/>
                    <Switch>
                        <Route exact path='/AddDebate' component={AddDebate}/>
                        <Route path='/edit/:id' component={EditDebate}/>
                        <Route path='/DebateList' component={DebateList}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}