import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

function Router() {
    return (
        <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/customers" component={Customers} />
        </Switch>
    )
}

export default Router
