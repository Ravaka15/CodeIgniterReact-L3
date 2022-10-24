import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import styles from "./Nav.css";
import images from "./img/images.png";

export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg">
          <img
              src={images}
              width="50"
              height="50"
              alt="images"
            />
          <Link 
          to="/" class="navbar-nav mr-auto" 
          style={{textDecoration: 'none', 
          color: 'rgb(150, 41, 108)',fontWeight: 'bold',fontSize: 25}}>
          Lazan'i Betsileo
          </Link>
        <div className='menus'>
          <ul class="navbar-nav ml-auto" >
            <li className={styles.menu}>
              <Link class="nav-link" to="/" style={{color: 'black',fontWeight: 'bold'}}>Home</Link>
            </li>
            <li  className={styles.menu}>
              <Link class="nav-link" to="/customer/index" style={{color: 'black',fontWeight: 'bold',}}>Produit</Link>
            </li>
            <li className={styles.menu}>
              <Link class="nav-link" to="/customer/form" style={{color: 'black',fontWeight: 'bold'}}>Create</Link>
            </li>
            <li className={styles.menu}>
              <Link class="nav-link" to="/customer/edit/5" style={{color: 'black',fontWeight: 'bold'}}>Edit</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}