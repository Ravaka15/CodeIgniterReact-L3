import React, { Component } from 'react'; 
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import home from "../img/home.png";
import styles from "../css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <MDBRow style={{height: 100}}>
          <MDBCol  lg='6'>
          </MDBCol>
        </MDBRow>

        <MDBRow style={{textDecoration: 'none', 
          color: 'rgb(172, 108, 147)',fontWeight: 'bold',fontSize: 25}} 
          className={styles.textTitre}>
          <MDBCol lg='8'>
          <p> La societe Lazan'iBetsileo vous presente </p>
          </MDBCol>


        </MDBRow>

        <MDBRow className={styles.text}>
          <MDBCol lg='8'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  </p>
          </MDBCol>
    
          <MDBCol lg='4'>
            <img
              src={home}
              className='img-fluid'
              alt=''
            />
          </MDBCol>
      </MDBRow>

      <MDBRow style={{height: 100}}>
          <MDBCol  lg='6'>
          </MDBCol>
        </MDBRow>
      </>
    )
  }
}