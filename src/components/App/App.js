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
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import Logo from '../Logo/Logo'
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import FaceDetection from '../FaceDetection/FaceDetection';
import CelebrityDetection from '../CelebrityDetection/CelebrityDetection';
import Rank from '../Rank/Rank';
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
		const { route, imageUrl, apiResponse, isSignedIn, imageStatus } = this.state;

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
			let apiElement;
			if(this.state.homeMode === 'FaceDetection'){
				apiElement = <FaceDetection imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse} />;
			}
			else if (this.state.homeMode === 'CelebrityDetection'){
				apiElement = <CelebrityDetection imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse}/>
			}
			renderElem = 
				<div>
					<Logo />
					<Rank userFirstName = {this.state.user.firstName} userLastName = {this.state.user.lastName} userEntries = {this.state.user.entries} />
					<ImageLinkForm inputString = {this.state.inputString} onSearchChange = {this.onSearchChange} onFacesButtonSubmitChange = {this.onFacesButtonSubmitChange} onCelebrityButtonSubmitChange = {this.onCelebrityButtonSubmitChange}/>
					{apiElement}		
				</div>
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