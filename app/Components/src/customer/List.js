import React, { Component } from 'react'; 
import axios from 'axios';
import { Link } from "react-router-dom";
export default class List extends Component {

  constructor()
  {
    super()
    this.state = {
      listCustomer:[]
    }
  }

  componentDidMount()
  {
    console.log("Mounted Component List");
    axios.get("http://localhost:8080/api/customer/list")
    .then(response=>{
      console.log(response.data);
      this.setState({listCustomer:response.data.data})
    })
    .catch(error=>{
      alert("Error ==>"+error);
    })
  }


  render() {
    return (
      <section>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

          {
            this.state.listCustomer.map((data)=>{
              return(
                <tr>
                <th scope="row">{data.idClient}</th>
                <td>{data.nomClient}</td>
                <td>{data.prenomClient}</td>
                <td>{data.emailClient}</td>
                <td>{data.telephoneClient}</td>
                <td>
                  <Link to={"/customer/edit/"+data.idClient} class="btn btn-warning"> Edit </Link>
                  <a href="#" class="btn btn-danger"> Delete </a>
                </td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </section>
    )
  }
}