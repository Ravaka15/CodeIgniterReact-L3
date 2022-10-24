import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import home from "../img/home.png";

export default class Home extends Component {
  render() {
    return (
        
        <MDBRow>
        <MDBCol lg='2' md='6' className='mb-2'>
        <Link> La societe Lazan'iBetsileo vous presente </Link>
        </MDBCol>
  
        <MDBCol lg='4' md='6' className='mb-4'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </MDBCol>
  
        <MDBCol lg='4' md='4' className='mb-4'>
          <img
            src={home}
            className='img-fluid'
            alt=''
          />
        </MDBCol>
      </MDBRow>
    )
  }
}