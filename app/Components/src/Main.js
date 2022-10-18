import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./customer/Form"
import List from "./customer/List"
import Edit from "./customer/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav/>
          <Switch>
            <Route path="/customer/index" exact component={List} />
            <Route path="/customer/form"  component={Form} />
            <Route path="/customer/edit/:idClient" component={Edit} />
          </Switch>
        </main>
      </Router>
    )
  }
}
// for <div id="main-customer"></div>
ReactDOM.render(<Main />, document.getElementById('main-customer'));