import React from 'react';
import Logo from '../Logo/Logo'
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceDetection from '../FaceDetection';
import CelebrityDetection from '../CelebrityDetection';
import Rank from '../Rank/Rank';

const Home = (props) => {

	const { homeMode, imageStatus, imageUrl, apiResponse, user, inputString, onSearchChange, onFacesButtonSubmitChange, onCelebrityButtonSubmitChange } = props;

	let apiElement;
	if(homeMode === 'FaceDetection'){
		apiElement = <FaceDetection imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse} />;
	}
	else if (homeMode === 'CelebrityDetection'){
		apiElement = <CelebrityDetection imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse}/>
	}
	return(

		<div>
			<Logo />
			<Rank userFirstName = {user.firstName} userLastName = {user.lastName} userEntries = {user.entries} />
			<ImageLinkForm inputString = {inputString} onSearchChange = {onSearchChange} onFacesButtonSubmitChange = {onFacesButtonSubmitChange} onCelebrityButtonSubmitChange = {onCelebrityButtonSubmitChange}/>
			{apiElement}		
		</div>
	); 

}


export default Home;