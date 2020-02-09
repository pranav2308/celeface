import React from 'react';
import { onEmailChange, onPasswordChange, onSignInClick } from '../Utils';
import SigninView from './SigninView';

class Signin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			signInEmail : '',
			signInPassword : ''
		}
		this.onEmailChange = onEmailChange.bind(this);
		this.onPasswordChange = onPasswordChange.bind(this);
		this.onSignInClick = onSignInClick.bind(this);
	}

	

	

	render(){
		const { onSignedOutRouteChange } = this.props;
		const { onEmailChange, onPasswordChange, onSignInClick } = this;

		return(
			<SigninView
				onEmailChange = { onEmailChange }
				onPasswordChange = { onPasswordChange }
				onSignInClick = { onSignInClick }
				onSignedOutRouteChange = { onSignedOutRouteChange }
			/>
		);
		
	}
}

export default Signin;