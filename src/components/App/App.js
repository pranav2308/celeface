import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import {
	onSearchChange, 
	onFacesButtonSubmitChange, 
	onCelebrityButtonSubmitChange, 
	onSignedOutRouteChange, 
	onSignedInRouteChange,
	initialState,
	callClarifaiFaceDetect,
	callClarifaiCelebrityDetect,
	fetchLeaderBoard, 
	loadUser,
	setImageStatus,
	AuthenticationProtectedRoute  } from './Utils';

import About from '../About';
import Particles from 'react-particles-js';
import particleOptions from '../ParticleOptions/ParticleOptions';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import {Signin, Register} from '../Authentication';
import Home from '../Home';
import LeaderBoard from '../LeaderBoard';

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
		const { imageUrl, apiResponse, isSignedIn, imageStatus, homeMode, user, inputString, leaders } = this.state;
		const {onSearchChange, onFacesButtonSubmitChange, onCelebrityButtonSubmitChange, onSignedOutRouteChange, onSignedInRouteChange, fetchLeaderBoard, loadUser} = this;

		return (
			<div className="App">
				<Particles className = 'particles' params = {particleOptions}/>
				<Router>
					<Route render = {(props) => <Navigation onSignedOutRouteChange = {onSignedOutRouteChange} onSignedInRouteChange = {onSignedInRouteChange} fetchLeaderBoard = {fetchLeaderBoard} isSignedIn = {isSignedIn} {...props}/>}/>
					<Switch>
						<Route exact path = '/about' component = {About}/>
						<Route exact path = {['/signin', '/']} render = {(props) => <Signin loadUser = {loadUser} onSignedOutRouteChange = {onSignedOutRouteChange} {...props}/>}/>
						<Route exact path = '/register' render = {(props) => <Register loadUser = {loadUser} onSignedOutRouteChange = {onSignedOutRouteChange} {...props}/>}/>
						<Route exact path = '/leaderboard' render = {(props) => <AuthenticationProtectedRoute  leaders = {leaders} isSignedIn = {isSignedIn} component = {LeaderBoard}/>}/>
						<Route 
							exact path = '/home' 
							render = {(props) => 
							<AuthenticationProtectedRoute 
							homeMode = {homeMode} 
							imageStatus = {imageStatus} 
							imageUrl = {imageUrl} 
							apiResponse = {apiResponse} 
							user = {user} 
							inputString = {inputString} 
							onSearchChange = {onSearchChange} 
							onFacesButtonSubmitChange = { onFacesButtonSubmitChange} 
							onCelebrityButtonSubmitChange = {onCelebrityButtonSubmitChange}
							isSignedIn = {isSignedIn}
							component = {Home} />}/>
						<Route component = {PageNotFound}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;