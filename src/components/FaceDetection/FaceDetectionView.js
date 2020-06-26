import React from 'react';
import './FaceDetection.css';

const FaceDetectionView = (props) => {

	const { imageStatus, imageUrl, apiResponse, calculateFaceLocations, drawFaceBox } = props;

	let faceBoxElement, renderElement;
	//If the inpur image is valid image then calculate bounding boxes.
	if (imageStatus === 'valid'){
		
		if (apiResponse !== ''){

			const clarifaiFaces = apiResponse.outputs[0].data.regions;
			if(clarifaiFaces){
				faceBoxElement = calculateFaceLocations(clarifaiFaces).map(drawFaceBox);
			}
			
		}
		renderElement = <div className = 'absolute mt2'>
						<img id = "inputImage" alt = 'Human faces' src = {imageUrl} width = '500px' height = 'auto' style = {{ border: '3px solid #021a40' }}/>
						{faceBoxElement}
					</div>;
	}

	//If the image is invalid then display error message.
	else if (imageStatus === 'invalid'){
		renderElement = <p className = 'mt4 f4 fw5'>{"Link does not redirects to image. Please check the link and try again"}</p>;
	}
	return(
		<div className = 'center ma'>
			{renderElement}
		</div>
	);
}

export default FaceDetectionView;