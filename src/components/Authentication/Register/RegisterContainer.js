import React from 'react';
import { onRegisterFirstNameChange, onRegisterLastNameChange, onRegisterEmailchange, onRegisterPasswordChange, onRegisterReTypePasswordChange, onRegisterCountryChange, onRegisterClick } from '../Utils';
import RegisterView from './RegisterView';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			registerFirstName : '',
			registerLastName : '',
			registerEmail : '',
			registerPassword : '',
			registerReTypePassword : '',
			registerCountry : "United States"
		}

		this.onRegisterFirstNameChange = onRegisterFirstNameChange.bind(this);
		this.onRegisterLastNameChange = onRegisterLastNameChange.bind(this);
		this.onRegisterEmailchange = onRegisterEmailchange.bind(this);
		this.onRegisterPasswordChange = onRegisterPasswordChange.bind(this);
		this.onRegisterReTypePasswordChange = onRegisterReTypePasswordChange.bind(this);
		this.onRegisterCountryChange = onRegisterCountryChange.bind(this);
		this.onRegisterClick = onRegisterClick.bind(this);
	}



	

	render(){
		const { onSignedOutRouteChange } = this.props;
		const { onRegisterFirstNameChange, onRegisterLastNameChange, onRegisterEmailchange, onRegisterPasswordChange, onRegisterReTypePasswordChange, onRegisterCountryChange, onRegisterClick } = this;
		const {registerCountry} = this.state; 
		return(
			<RegisterView
				onRegisterFirstNameChange = {onRegisterFirstNameChange}
				onRegisterLastNameChange = {onRegisterLastNameChange}
				onRegisterEmailchange = {onRegisterEmailchange}
				onRegisterPasswordChange = {onRegisterPasswordChange}
				onRegisterReTypePasswordChange = {onRegisterReTypePasswordChange}
				onRegisterCountryChange = {onRegisterCountryChange}
				onRegisterClick = {onRegisterClick}
				registerCountry = {registerCountry}
				onSignedOutRouteChange = {onSignedOutRouteChange}
			/>
		);
	}
}

export default Register;