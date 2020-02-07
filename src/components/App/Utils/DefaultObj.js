export const emptyUser = {
	id : "",
	firstName : "",
	lastName : "",
	email : "",
	country : "",
	entries : 0,
	joinDate : ""
}

export const initialState = {
	inputString : '',
	imageUrl : '',
	apiResponse : '',
	route : 'signin',
	homeMode : '',
	isSignedIn : false,
	imageStatus : 'empty',
	user : emptyUser,
	leaders : [] 
}
