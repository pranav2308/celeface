import React from 'react';
import {
	onSearchChange, 
	onFacesButtonSubmitChange, 
	onCelebrityButtonSubmitChange, 
	onSignedOutRouteChange, 
	onSignedInRouteChange,
	emptyUser, 
	initialState,
	callClarifaiFaceDetect,
	callClarifaiCelebrityDetect,
	fetchLeaderBoard, 
	loadUser,
	setImageStatus  } from './Utils';

import Particles from 'react-particles-js';
import particleOptions from '../ParticleOptions/ParticleOptions';
import Navigation from '../Navigation/Navigation';
import {Signin, Register} from '../Authentication';
import Home from '../Home';
import LeaderBoard from '../LeaderBoard';
//import Register from '../Register/Register';

import './App.css';
import 'tachyons';



class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = initialState;

		this.onSearchChange = onSearchChange.bind(this);
		this.onFacesButtonSubmitChange = onFacesButtonSubmitChange.bind(this);
		this.onCelebrityButtonSubmitChange = onCelebrityButtonSubmitChange.bind(this);
		this.onSignedOutRouteChange = onSignedOutRouteChange.bind(this);
		this.onSignedInRouteChange = onSignedInRouteChange.bind(this);
		this.callClarifaiFaceDetect = callClarifaiFaceDetect.bind(this);
		this.callClarifaiCelebrityDetect = callClarifaiCelebrityDetect.bind(this);
		this.fetchLeaderBoard = fetchLeaderBoard.bind(this);
		this.loadUser = loadUser.bind(this);
		this.setImageStatus = setImageStatus.bind(this);
	}

	

	

	render(){
		const { route, imageUrl, apiResponse, isSignedIn, imageStatus, homeMode, user, inputString } = this.state;
		const {onSearchChange, onFacesButtonSubmitChange, onCelebrityButtonSubmitChange} = this;

		let renderElem;
		if (route === 'signin'){
			renderElem = <Signin loadUser = {this.loadUser} onSignedOutRouteChange = {this.onSignedOutRouteChange}/>;
		} 
		else if (route === 'register'){
			renderElem = <Register loadUser = {this.loadUser} onSignedOutRouteChange = {this.onSignedOutRouteChange}/>;
		}
		else if (route === 'leaderboard'){
			renderElem = <LeaderBoard  leaders = {this.state.leaders}/>;
		}
		else{
			renderElem = <Home 
				homeMode = {homeMode} 
				imageStatus = {imageStatus} 
				imageUrl = {imageUrl} 
				apiResponse = {apiResponse} 
				user = {user} 
				inputString = {inputString} 
				onSearchChange = {onSearchChange} 
				onFacesButtonSubmitChange = { onFacesButtonSubmitChange} 
				onCelebrityButtonSubmitChange = {onCelebrityButtonSubmitChange} />  
		}
		return (
			<div className="App">
				
				<Particles className = 'particles' params = {particleOptions}/>
				<Navigation onSignedOutRouteChange = {this.onSignedOutRouteChange} onSignedInRouteChange = {this.onSignedInRouteChange} fetchLeaderBoard = {this.fetchLeaderBoard} isSignedIn = {isSignedIn}/>
				{renderElem}

			</div>
		);
	}
}

export default App;