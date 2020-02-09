function onEmailChange(event){
	this.setState({ signInEmail : event.target.value });
}

function onPasswordChange(event){
	this.setState({ signInPassword : event.target.value });
}


export { onEmailChange, onPasswordChange };