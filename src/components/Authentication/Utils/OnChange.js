function onEmailChange(event){
	this.setState({ signInEmail : event.target.value });
}

function onPasswordChange(event){
	this.setState({ signInPassword : event.target.value });
}

function onRegisterFirstNameChange(event){
	this.setState({registerFirstName : event.target.value});
}

function onRegisterLastNameChange(event){
	this.setState({registerLastName : event.target.value});
}

function onRegisterEmailchange(event){
	this.setState({registerEmail : event.target.value});
}

function onRegisterPasswordChange(event){
	this.setState({registerPassword : event.target.value});
}

function onRegisterReTypePasswordChange(event){
	this.setState({registerReTypePassword : event.target.value});
}

function onRegisterCountryChange(value){
	this.setState({registerCountry : value});
}

export { onEmailChange, onPasswordChange, onRegisterFirstNameChange, onRegisterLastNameChange, onRegisterEmailchange, onRegisterPasswordChange, onRegisterReTypePasswordChange, onRegisterCountryChange };