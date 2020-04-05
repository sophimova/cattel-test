import './Navigator.css';

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Test, TestRunner, Result, NotFound, ServerError } from './containers';

const Navigator = () => (
    <BrowserRouter>
        <Fragment>
            <div className="main-container">
                <Switch>
                    <Route path="/" exact component={TestRunner} />
                    <Route path="/test" component={Test} />
                    <Route path="/result/:id" component={Result} />
                    <Route path="/error" component={ServerError} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </Fragment>
    </BrowserRouter>
);

export default Navigator;
