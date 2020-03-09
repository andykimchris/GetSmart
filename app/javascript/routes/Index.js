import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SampleComponent from "../components/SampleComponent";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={SampleComponent} />
    </Switch>
  </Router>
);
