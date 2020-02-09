function onSignInClick() {
	fetch('https://celeface-server.herokuapp.com/signin', {
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			email : this.state.signInEmail,
			password : this.state.signInPassword
		})
	})
	.then(response => {
		if(response.status === 200){
			return response.json();
		}
		else if(response.status === 401){
			alert("Unable to sign-in. Please check your email and password");
			return null;
		}
		else{ //if the error code is 400
			alert("Oops! Something went wrong. Please try to sign-in again.");
			return null;
			//this.props.onSignedOutRouteChange('signin')
		}
	}).then(userData => {
		if(userData){
			this.props.loadUser(userData);
		}
	}).catch(() => {
		alert("Oops! It seems that you are disconnected. Please check your connection and try to signin again");
	});

}

export { onSignInClick };