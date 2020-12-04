import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";

import Error from "./Error";

export default class MyRouting extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}
