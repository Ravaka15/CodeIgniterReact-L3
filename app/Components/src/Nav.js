import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import styles from "./Nav.css";
export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li  className={styles.menu}>
              <Link class="nav-link" to="/customer/index">List</Link>
            </li>
            <li className={styles.menu}>
              <Link class="nav-link" to="/customer/form">Create</Link>
            </li>
            <li className={styles.menu}>
              <Link class="nav-link" to="/customer/edit/5">Edit</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}