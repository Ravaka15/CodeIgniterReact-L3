import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './customer/Home';

import Nav from "./Nav";
import Form from "./customer/Form";
import List from "./customer/List";
import Edit from "./customer/Edit";


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
            <Route path="/" exact component={Home} />
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



{/* <MDBRow>
      <MDBCol sm='4'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </MDBCol>
      <MDBCol sm='6'>
      <img
           src={home}
           className='img-fluid rounded-pill'
           alt='home'
         />
      </MDBCol>
    </MDBRow> */}