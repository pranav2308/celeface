import {emptyUser} from './DefaultObj';

function onSignedInRouteChange(route){
	this.setState({route : route});
}

function onSignedOutRouteChange(route){
	/*route argument can be either sign-in page or register.
		method can be called from sign-in page, register page or from home page via sign-out 
		the route can be either to sign-in page or register page*/
	this.setState({
		isSignedIn : false,
		route : route,
		homeMode : '',
		user : emptyUser,
		inputString : '',
		imageUrl : '',
		apiResponse : '',
		imageStatus : 'empty'}); 
}

export { onSignedOutRouteChange, onSignedInRouteChange };