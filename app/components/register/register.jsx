import AltContainer from 'alt-container';
import React from 'react';
import API from '../../libs/api.js'

export default class Register extends React.Component {
	//const {submitting, ...props} = this.props;
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: ""
		}
	}

	render(){

		return(
		<div>
		<form role="form" className="form-group margin-register" onSubmit={this.submitting}>
			<div className="col-md-12">
				<label className="control-label brown">Nama</label>
				<input className="form-control form-group" 
						type="text" 
						value={this.state.nama} 
						onChange={this.handleNameChange}
						required />
			</div>
			<div className="col-md-12">
				<label className="control-label brown">Username</label>
				<input className="form-control form-group" 
						type="text" 
						value={this.state.username} 
						onChange={this.handleUsernameChange} 
						required />
			</div>
			<div className="col-md-12">
				<label className="control-label brown">E-mail</label>
				<input className="form-control form-group" 
						type="email" 
						value={this.state.email} 
						onChange={this.handleEmailChange} 
						required />
			</div>
			<div className="col-md-12">
				<label className="control-label brown">Password</label>
				<input className="form-control form-group" 
						type="password" 
						value={this.state.password} 
						onChange={this.handlePasswordChange} 
						required />
			</div>
			<div className="col-md-12">
				<label className="control-label brown">Konfirmasi Password</label>
				<input className="form-control form-group" 
						type="password" 
						value={this.state.password_confirmation} 
						onChange={this.handlePasswordConfirmationChange} 
						required />
			</div>
			<div className="col-md-12">
				<button className="btn bg-orange white col-md-12" type="submit">DAFTAR</button>
			</div>
		</form>
		</div>
	);
	}
	
	handleNameChange = (e) => {this.setState({name: e.target.value})}

	handleUsernameChange = (e) => {this.setState({username: e.target.value})}

	handleEmailChange = (e) => {this.setState({email: e.target.value})}

	handlePasswordChange = (e) => {this.setState({password: e.target.value})}

	handlePasswordConfirmationChange = (e) => {this.setState({password_confirmation: e.target.value})}

	submitting = (e) => {
		e.preventDefault();
		console.log("coba1");
		var name = this.state.name.trim();
		var username = this.state.username.trim();
		var email = this.state.email.trim();
		var password = this.state.password.trim();
		var password_confirmation = this.state.password_confirmation.trim();
		if (!name || !username || !email || !password || !password_confirmation) {
		return;
		}
	    
	   
		var data = {
			name: name,
			username: username,
			email: email,
			password: password,
			password_confirmation: password_confirmation
		}

		API.post('/register', data).then(function(err, response){
			console.log(err);
			console.log(response);
			console.log("coba");
		});
/*
	   superagent.post('http://localhost/meetchange/public/api/register')
		.type('json')
		.set('Content-Type', 'application/json')
		.send({
			name: this.state.name,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		})
		.end(function(err, response){
			console.log(err);
			console.log(response);
			console.log("coba");
		});
*/
	   this.setState({
	   	name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: ""
		});
	}	
	
}