import React from 'react';
 


class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			registerName : '',
			registerEmail : '',
			registerPassword : '',
			registerReTypePassword : ''
		}
	}

	onRegisterNameChange = (event) => {
		this.setState({registerName : event.target.value});
	}

	onRegisterEmailchange = (event) => {
		this.setState({registerEmail : event.target.value});
	}

	onRegisterPasswordChange = (event) => {
		this.setState({registerPassword : event.target.value});
	}

	onRegisterReTypePasswordChange = (event) => {
		this.setState({registerReTypePassword : event.target.value});
	}

	onRegisterClick = () => {
		if(this.state.registerPassword !== this.state.registerReTypePassword){
			alert("Your password and re-typed password does not match. Please register again");
		}
		else{
			fetch('http://localhost:3000/register', {
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				name : this.state.registerName,
				email : this.state.registerEmail,
				password : this.state.registerPassword
				})
			}).then(response => {
				if(response.status === 200){
					return response.json();
				}
				else if (response.status === 409){
					alert("User with same email already exists. You can try signing-in or choose another email for registration");
					return null;
				}
				else{ //if the error code is 400
					alert("Oops! Something went wrong. Please try to register again.");
					//this.props.onSignedOutRouteChange('register'); This method would not vanish typed content.  
					return null;
				}
			}).then(userData => {
				if (userData){
					this.props.onSignedInRouteChange(userData, 'home');
				}
			}).catch(() => {
				alert("Oops! It seems that you are disconnected. Please check your connection image entry can be updated");
			});	
		}
		
	}

	render(){
		const { onSignedOutRouteChange } = this.props;
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">	
				<main className="pa4 black-80">
					<div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					    	<legend className="f2 fw6 ph0 mh0">Register</legend>
				      		<div className="mt3">
					        	<label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
					        	<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="name" 
					        	name="name"  
					        	id="email-address" 
					        	onChange = {this.onRegisterNameChange}/>
				      		</div>
				      		<div className="mt3">
					        	<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        	<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address" 
					        	onChange = {this.onRegisterEmailchange}/>
				      		</div>
					        <div className="mv3">
					        	<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        	<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password" 
					        	onChange = {this.onRegisterPasswordChange}/>
					      	</div>
					      	<div className="mv3">
					        	<label className="db fw6 lh-copy f6" htmlFor="password">Re-type Password</label>
					        	<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="reTypePassword"
					        	onChange = {this.onRegisterReTypePasswordChange} />
					      	</div>
					    </fieldset>
					    <div className="">
					      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
					       type="submit" 
					       value="Register"
					       onClick = {this.onRegisterClick} />
					    </div>
					    <div className="lh-copy mt3 pointer">
				      		<p onClick = {() => onSignedOutRouteChange('signin')}
				      		className="f6 link dim black db">Already a member?, sign-in!</p>
				    	</div>
					</div>
				</main>
			</article>
		);	
	}
}

export default Register;