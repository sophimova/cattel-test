import './Navigator.css';

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Test, TestRunner, Result, NotFound, ServerError } from './containers';
import { BASE_PATH } from './utilities';

const Navigator = () => (
    <BrowserRouter>
        <Fragment>
            <div className="main-container">
                <Switch>
                    <Route path={BASE_PATH} exact component={TestRunner} />
                    <Route path={BASE_PATH + "test"} component={Test} />
                    <Route path={BASE_PATH + "result/:id"} component={Result} />
                    <Route path={BASE_PATH + "error"} component={ServerError} />
                    <Route path={BASE_PATH + "*"} component={NotFound} />
                </Switch>
            </div>
        </Fragment>
    </BrowserRouter>
);

export default Navigator;
