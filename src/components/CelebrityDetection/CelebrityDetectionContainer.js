import React from 'react';
import CelebrityDetectionView from './CelebrityDetectionView';
import {generateResult} from './Utils';

const CelebrityDetection = ({ imageStatus, imageUrl, apiResponse }) => {
	return (
		<CelebrityDetectionView 
		imageStatus = {imageStatus} 
		imageUrl = {imageUrl}
		apiResponse = {apiResponse}
		generateResult = {generateResult}
		/>
	);
}

export default CelebrityDetection;