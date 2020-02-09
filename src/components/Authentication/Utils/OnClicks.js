import {isValidRegistrationForm} from './Validate';

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

function onRegisterClick(){
		
	if(isValidRegistrationForm(this.state)){
		fetch('https://celeface-server.herokuapp.com/register', {
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			firstName : this.state.registerFirstName,
			lastName : this.state.registerLastName,
			email : this.state.registerEmail,
			password : this.state.registerPassword,
			country : this.state.registerCountry
			})
		}).then(response => {
			if(response.status === 200){
				return response.json();
			}
			else if (response.status === 409){
				alert("User with same email already exists. You can try signing-in or choose another email for registration");
				return null;
			}
			else if(response.status === 406){ //in case front-end does not catch the form validation. 
				alert("Please check the entered credentials and register again")
				return null;
			}
			else{ //if the error code is 400
				alert("Oops! Something went wrong. Please try to register again.");
				//this.props.onSignedOutRouteChange('register'); This method would not vanish typed content.  
				return null;
			}
		}).then(userData => {
			if (userData){
				this.props.loadUser(userData);
			}
		}).catch((error) => {
			alert("Oops! It seems that you are disconnected. Please check your connection image entry can be updated");
		});	
	}
	
}

export { onSignInClick, onRegisterClick };