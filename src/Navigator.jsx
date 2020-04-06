import './Navigator.css';

import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import { Test, TestRunner, Result, NotFound, ServerError } from './containers';

const Navigator = () => (
    <HashRouter>
        <div className="main-container">
            <Switch>
                <Route path='/' exact component={TestRunner} />
                <Route path="/test" component={Test} />
                <Route path="/result/:id" component={Result} />
                <Route path="/error" component={ServerError} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>
);

export default Navigator;
