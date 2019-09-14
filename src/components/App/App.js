import React from 'react';
import Particles from 'react-particles-js';
import particleOptions from '../ParticleOptions/ParticleOptions';
import Navigation from '../Navigation/Navigation';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import Logo from '../Logo/Logo'
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import Rank from '../Rank/Rank';
import './App.css';
import 'tachyons';

const emptyUser = 
	{
		id : "",
		firstName : "",
		lastName : "",
		email : "",
		country : "",
		entries : 0,
		joinDate : ""
	}

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			inputString : '',
			imageUrl : '',
			apiResponse : '',
			route : 'signin',
			isSignedIn : false,
			imageStatus : 'empty',
			user : emptyUser 
		}

		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSubmitChange = this.onSubmitChange.bind(this);
		this.setImageStatus = this.setImageStatus.bind(this);
	}

	onSearchChange = (event) => {
		this.setState({inputString : event.target.value});
	}

	setImageStatus = (imageUrl) => {
		if(imageUrl === ''){
			this.setState({imageStatus : 'empty'});
		}
		else{
			let img = new Image();
			img.onload = function(){
				
				fetch('http://localhost:3000/image', {
					method : 'put',
					headers : {'Content-Type' : 'application/json'},
					body : JSON.stringify({
						id : this.state.user.id,
						imageUrl : imageUrl,
						email : this.state.user.email
					})
				})
				.then(response => {
					if(response.status === 200){
						return response.json();
					}else{	//if response status is 406 or 400
						this.onSignedOutRouteChange('signin');
						alert('Something went wrong! Please login again');
						return null;
					}
				})
				.then(entries => {
					if(entries){
						this.setState({user : Object.assign(this.state.user, {entries : entries}),
										imageStatus : 'valid'});
					}
				}).catch(() => {
					this.onSignedOutRouteChange('signin');
					alert("Oops! It seems that you are disconnected. Please check your connection and try to sign-in again");
				})

			}.bind(this);
			img.onerror = function(){
				this.setState({imageStatus : 'invalid'});
			}.bind(this);
			img.src = imageUrl;
		}
	}

	callClarifaiFaceDetect = (imageUrl) => {
		fetch('http://localhost:3000/faces', {
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				imageUrl : imageUrl,
			})
		})
		.then(response => {
			if(response.status === 200){
				return response.json();
			}else if(response.status === 500 || response.status === 400){
				alert("There seems to be some problem with API request. Please contact the administrator regarding this");
				return null;
			}else{//if the status code is 406
				return null;
			}
		})
		.then(apiResponse => {
			if(apiResponse){
				this.setState({apiResponse : apiResponse});	
			}
		})
		.catch(() => {
			this.onSignedOutRouteChange('signin');
			alert("Oops! It seems that you are disconnected. Please check your connection and try to sign-in again");
		});
	}

	onSubmitChange = (event) => {
		this.setState({imageUrl : this.state.inputString,
										apiResponse : ''});
		this.setImageStatus(this.state.inputString);
		
		this.callClarifaiFaceDetect(this.state.inputString);	
	}

	loadUser = (user) => {
		/*route argument will be only home as of now but can be updated to include more features in future.
			method can be called from sign-in page (by clicking sign-in) or from register page (by clicking register).*/
		const newUser = {
			id : user.id,
			firstName : user.firstname,
			lastName : user.lastname,
			email : user.email,
			country : user.country,
			entries : user.entries,
			joinDate : user.joindate
		}
		this.setState({
			inputString : '',
			imageUrl : '',
			apiResponse : '',
			imageStatus : 'empty',
			user : newUser,
			isSignedIn : true,
			route : 'home'}); 
	}

	onSignedInRouteChange = (route) => {
		this.setState({route : route});
	}

	onSignedOutRouteChange = (route) => {
		/*route argument can be either sign-in page or register.
			method can be called from sign-in page, register page or from home page via sign-out 
			the route can be either to sign-in page or register page*/
		this.setState({
			isSignedIn : false,
			route : route,
			user : emptyUser,
			inputString : '',
			imageUrl : '',
			apiResponse : '',
			imageStatus : 'empty'}); 
	}

	render(){
		const { route, imageUrl, apiResponse, isSignedIn, imageStatus } = this.state;
		let renderElem;
		if (route === 'signin'){
			renderElem = <Signin loadUser = {this.loadUser} onSignedOutRouteChange = {this.onSignedOutRouteChange}/>;
		} 
		else if (route === 'register'){
			renderElem = <Register loadUser = {this.loadUser} onSignedOutRouteChange = {this.onSignedOutRouteChange}/>;
		}
		else if (route === 'leaderboard'){
			renderElem = '';
		}
		else{
			renderElem = 
				<div>
					<Logo />
					<Rank userFirstName = {this.state.user.firstName} userLastName = {this.state.user.lastName} userEntries = {this.state.user.entries} />
					<ImageLinkForm onSearchChange = {this.onSearchChange} onSubmitChange = {this.onSubmitChange}/>
					<FaceRecognition imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse} />
				</div>
		}
		return (
			<div className="App">
				
				<Particles className = 'particles' params = {particleOptions}/>
				<Navigation onSignedOutRouteChange = {this.onSignedOutRouteChange} onSignedInRouteChange = {this.onSignedInRouteChange} isSignedIn = {isSignedIn}/>
				{renderElem}

			</div>
		);
	}
}

export default App;