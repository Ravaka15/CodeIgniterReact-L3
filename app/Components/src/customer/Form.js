import React, { Component } from 'react';
import axios from 'axios';
export default class Form extends Component {
  
  constructor(){
    super()
    this.state = {
      fieldNomClient:"",
      fieldPrenomClient:"",
      fieldTelephoneClient:"",
      fieldEmailClient:"",
      fieldAdresseClient:"",
    }
  }
  

  render() {
    return (
      <div>
        <h4>Insertion client</h4>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="nomClient">Nom client {this.state.fieldNomClient}</label>
            <input type="text" class="form-control" placeholder="Nom" 
              value={this.state.fieldNomClient}
              onChange={(value)=>this.setState({fieldNomClient:value.target.value})} />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="prenomClient">Prenom client {this.state.fieldPrenomClient}</label>
            <input type="text" class="form-control" placeholder="Prenom" 
              value={this.state.fieldPrenomClient}
              onChange={(value)=>this.setState({fieldPrenomClient:value.target.value})} />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="telephoneClient">Telephone client {this.state.fieldTelephoneClient}</label>
            <input type="text" class="form-control" placeholder="Telephone" 
              value={this.state.fieldTelephoneClient}
              onChange={(value)=>this.setState({fieldTelephoneClient:value.target.value})} />
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="emailClient">Email</label>
	          <input type="emailClient" class="form-control" placeholder="you@example.com" 
               value={this.state.fieldEmailClient}
               onChange={(value)=>this.setState({fieldEmailClient:value.target.value})}/>
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="addresseClient">Addresse client</label>
	          <input type="text" class="form-control" placeholder="Adresse" 
            value={this.state.fieldAdresseClient}
            onChange={(value)=>this.setState({fieldAdresseClient:value.target.value})} />
          </div>
        </div>

				<div class="row">
					<div class="col-md-6 mb-3">
		      	<button onClick={()=>this.onClickSave()} class="btn btn-primary btn-block" type="submit">Save</button>
					</div>
				</div>
      </div>
    )
  }

  onClickSave ()
  {
    const baseUrl = "http://localhost:8080/api/customer/create"
  
    const datapost = {
      nomClient: this.state.fieldNomClient,
      prenomClient: this.state.fieldPrenomClient,
      telephoneClient: this.state.fieldTelephoneClient,
      emailClient: this.state.fieldEmailClient,
      adresseClient: this.state.fieldAdresseClient,
    }

    console.log(datapost);

    axios.post(baseUrl,datapost)
    .then(response=>{
      alert(response.data.message)
    })
    .catch(error=>{
      alert("Error 500"+error)
    })
  }
}