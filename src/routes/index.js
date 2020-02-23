import React from "react";
import { Switch, Route } from "react-router-dom";

// import screens
import Home from "../screens/home";
import Login from "../screens/login";
import Orders from "../screens/order";

export default function () {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/orders" component={Orders} />
        </Switch>
    )
}