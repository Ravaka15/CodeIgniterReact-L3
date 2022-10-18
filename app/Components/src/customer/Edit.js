import React, { Component } from 'react';
import axios from 'axios';
export default class Edit extends Component {
  
  constructor(){
    super()
    this.state = {
      idClient:0,
      fieldNomClient:"",
      fieldPrenomClient:"",
      fieldTelephoneClient:"",
      fieldEmailClient:"",
      fieldAdresseClient:"",
    }
  }
  
  componentDidMount()
  {
    const user_id = this.props.match.params.idClient;
    const url = "http://localhost:8080/api/customer/get/"+user_id
    axios.get(url)
    .then(response=>{
      const res =response.data
      if (res.success) {
        console.log(res.data);
        this.setState({
          fieldNomClient:res.data.nomClient,
          fieldPrenomClient:res.data.prenomClient,
          fieldTelephoneClient:res.data.telephoneClient,
          fieldEmailClient:res.data.emailClient,
          fieldAdresseClient:res.data.adresseClient,
        })
      }
    })
    .catch(error=>{
      alert("Error 500"+error)
    })
  }

  render() {

    let userId = this.props.match.params.id;

    return (
      <div>
        <h4>Edit customer {userId} </h4>
        <hr />
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="nom">Nom</label>
            <input type="text"  class="form-control"
            value={this.state.fieldNomClient}
            onChange={(event)=>this.setState({fieldNomClient:event.target.value})}/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="prenom">Prenom</label>
            <input type="text"  class="form-control"
            value={this.state.fieldPrenomClient}
            onChange={(event)=>this.setState({fieldPrenomClient:event.target.value})}/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="telephone">Telephone</label>
            <input type="text"  class="form-control"
            value={this.state.fieldTelephoneClient}
            onChange={(event)=>this.setState({fieldTelephoneClient:event.target.value})}/>
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Email</label>
	          <input type="email" class="form-control" 
              value={this.state.fieldEmailClient}
              onChange={(event)=>this.setState({fieldEmailClient:event.target.value})} />
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="address">Adresse</label>
	          <input type="text" class="form-control" 
              value={this.state.fieldAdresseClient}
              onChange={(event)=>this.setState({fieldAdresseClient:event.target.value})} />  
          </div>
        </div>

				<div class="row">
					<div class="col-md-6 mb-3">
		      	<button class="btn btn-primary btn-block" type="submit">Save</button>
					</div>
				</div>
      </div>
    )
  }
}