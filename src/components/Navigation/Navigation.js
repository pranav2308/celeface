import React from 'react';


const Navigation = ({onSignedOutRouteChange, isSignedIn}) => {
	if (isSignedIn){
		return(
			<nav style = {{display : 'flex', justifyContent : 'flex-end'}} >
				<p className = 'f3 black link dim underline pa3 pointer'
			onClick = {() => onSignedOutRouteChange('signin')}>Sign Out</p>;
			</nav>
		);
	}
	else{
		
		return(
			<nav style = {{display : 'flex', justifyContent : 'flex-end'}}>
				<p className = 'f3 black link dim underline pa3 pointer'
				onClick = {() => onSignedOutRouteChange('signin')}>Sign In</p>
				<p className = 'f3 black link dim underline pa3 pointer'
				onClick = {() => onSignedOutRouteChange('register')}>Register</p>
			</nav>
		);		
	}
}
export default Navigation;