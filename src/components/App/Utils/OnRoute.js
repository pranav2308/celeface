import {emptyUser} from './DefaultObj';


function onSignedInRouteChange(route, replace){
	const newUrl = '/'.concat(route);
	replace(newUrl);
}

function onSignedOutRouteChange(route, replace){
	/*
		Route argument can be either sign-in page or register.
		method can be called from sign-in page, register page or from home page via sign-out 
		the route can be either to sign-in page or register page
	*/

	this.setState({
		isSignedIn : false,
		homeMode : '',
		user : emptyUser,
		inputString : '',
		imageUrl : '',
		apiResponse : '',
		imageStatus : 'empty'});


	const newUrl = '/'.concat(route);
	replace(newUrl);

}

export { onSignedOutRouteChange, onSignedInRouteChange };