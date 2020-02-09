import React from 'react';
import {calculateFaceLocations, drawFaceBox} from './Utils';
import FaceDetectionView from './FaceDetectionView';
 



const FaceDetection = ({ imageStatus, imageUrl, apiResponse }) => {
	return(
		<FaceDetectionView
			imageStatus = {imageStatus}
			imageUrl = {imageUrl}
			apiResponse = {apiResponse}
			calculateFaceLocations = {calculateFaceLocations}
			drawFaceBox = {drawFaceBox}
		/>
	);
}

export default FaceDetection;