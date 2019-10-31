import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import {ChildRouter} from './children';

const BasicRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={ChildRouter}/>
            <Route path="/index" component={ChildRouter} />
        </Switch>
    </HashRouter>
);


export default BasicRouter;
