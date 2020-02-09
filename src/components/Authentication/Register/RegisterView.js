import React from 'react';
import { CountryDropdown } from 'react-country-region-selector'; 

const RegisterView = (props) => {

	const { onRegisterFirstNameChange, onRegisterLastNameChange, onRegisterEmailchange, onRegisterPasswordChange, onRegisterReTypePasswordChange, onRegisterCountryChange, onRegisterClick, registerCountry, onSignedOutRouteChange, history } = props;
	const { replace } = history;
	return(
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">	
			<main className="pa4 black-80">
				<div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				    	<legend className="f2 fw6 ph0 mh0">Register</legend>
			      		<div className="mt3">
				        	<label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
				        	<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="name" 
				        	name="name"  
				        	id="email-address" 
				        	onChange = {onRegisterFirstNameChange} required/>
			      		</div>
			      		<div className="mt3">
				        	<label className="db fw6 lh-copy f6" htmlFor="email-address">Last Name</label>
				        	<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="name" 
				        	name="name"  
				        	id="email-address" 
				        	onChange = {onRegisterLastNameChange} required/>
			      		</div>
			      		<div className="mt3">
				        	<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        	<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" 
				        	data-parse = "lowercase"
				        	onChange = {onRegisterEmailchange} required/>
			      		</div>
				        <div className="mv3">
				        	<label className="db fw6 lh-copy f6" htmlFor="password">Password <span className = "i fw1">(Must have : 1 lowercase, 1 uppercase, 1 digit, 1 special character and minimum length of 8)</span></label>
				        	<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" 
				        	onChange = {onRegisterPasswordChange} required/>
				      	</div>
				      	<div className="mv3">
				        	<label className="db fw6 lh-copy f6" htmlFor="password">Re-type Password</label>
				        	<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="reTypePassword"
				        	onChange = {onRegisterReTypePasswordChange} required/>
				      	</div>
				      	<div className="mt3">
			      			<label className="db fw6 lh-copy f6" htmlFor="email-address">Country</label>
			      			<CountryDropdown 
			      			className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			      			name = "name" 
			      			id = "email-address"
			      			defaultOptionLabel = "United States"
			      			value = {registerCountry}
			      			onChange = {onRegisterCountryChange}/>
			      		</div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				       type="submit" 
				       value="Register"
				       onClick = {onRegisterClick} />
				    </div>
				    <div className="lh-copy mt3 pointer">
			      		<p onClick = {() => onSignedOutRouteChange('signin', replace)}
			      		className="f6 link dim black db">Already a member?, sign-in!</p>
			    	</div>
				</div>
			</main>
		</article>
	);	

}

export default RegisterView;