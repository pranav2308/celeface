import React from 'react';
import './FaceRecognition.css';
 



const FaceRecognition = ({imageStatus, imageUrl, box}) => {
	let renderElem;
	if (imageStatus === 'valid'){
		renderElem = <div className = 'absolute mt2'>
						<img id = "inputImage" alt = 'Input image' src = {imageUrl} width = '500px' height = 'auto'/>
						<div className = "bounding-box" style = {{top : box.topRow, bottom : box.bottomRow, left : box.leftCol, right : box.rightCol}}></div>
					</div>;
	}
	else if (imageStatus === 'invalid'){
		renderElem = <p className = 'mt4 f4 fw5'>{"Link does not redirects to image. Please check the link and try again"}</p>;
	}
	return(
		<div className = 'center ma'>
			{renderElem}
		</div>
	);
}

export default FaceRecognition;