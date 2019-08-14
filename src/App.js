import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particleOptions from './components/ParticleOptions/ParticleOptions';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
	apiKey: 'c3fc1f30ca4844d4a8b43f29578e586e'
});

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
			user : {
				id : "",
				name : "",
				email : "",
				entries : 0,
				joinDate : ''
			}
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
						this.setState({user : Object.assign(this.state.user, {entries : entries})});
					}
				})

				this.setState({imageStatus : 'valid'});

			}.bind(this);
			img.onerror = function(){
				this.setState({imageStatus : 'invalid'});
			}.bind(this);
			img.src = imageUrl;
		}
	}

	onSubmitChange = (event) => {
		this.setState({imageUrl : this.state.inputString,
										apiResponse : ''});
		this.setImageStatus(this.state.inputString);
		// app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputString)
		// .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
		// .catch(console.log);
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputString)
		.then(response => this.setState({apiResponse : response}))
		.catch(console.log);
		
	}

	onSignedInRouteChange = (user, route) => {
		/*route argument will be only home as of now but can be updated to include more features in future.
			method can be called from sign-in page (by clicking sign-in) or from register page (by clicking register).*/
		this.setState({
			inputString : '',
			imageUrl : '',
			apiResponse : '',
			imageStatus : 'empty',
			user : user,
			isSignedIn : true,
			route : route}); 
		}

	onSignedOutRouteChange = (route) => {
		/*route argument can be either sign-in page or register.
			method can be called from sign-in page, register page or from home page via sign-out 
			the route can be either to sign-in page or register page*/
		this.setState({
			isSignedIn : false,
			route : route}); 
	}

	render(){
		const { route, imageUrl, apiResponse, isSignedIn, imageStatus } = this.state;
		let renderElem;
		if (route === 'signin'){
			renderElem = <Signin onSignedInRouteChange = {this.onSignedInRouteChange} onSignedOutRouteChange = {this.onSignedOutRouteChange}/>;
		} 
		else if (route === 'register'){
			renderElem = <Register onSignedInRouteChange = {this.onSignedInRouteChange} onSignedOutRouteChange = {this.onSignedOutRouteChange}/>;
		}
		else{
			renderElem = 
				<div>
					<Logo />
					<Rank userName = {this.state.user.name} userEntries = {this.state.user.entries} />
					<ImageLinkForm onSearchChange = {this.onSearchChange} onSubmitChange = {this.onSubmitChange}/>
					<FaceRecognition imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse} />
				</div>
		}
		return (
			<div className="App">
				
				<Particles className = 'particles' params = {particleOptions}/>
				<Navigation onSignedOutRouteChange = {this.onSignedOutRouteChange} isSignedIn = {isSignedIn}/>
				{renderElem}

			</div>
		);
	}
}

export default App;