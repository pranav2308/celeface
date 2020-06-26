import React from 'react';
import './CelebrityDetection.css';

const CelebrityDetectionView = (props) => {
	const { imageStatus, imageUrl, apiResponse, generateResult } = props;

	let tableElement, faceBoxElement, faceBoxRenderElement;
	if(imageStatus === 'valid'){

		if (apiResponse !== ''){
			const clarifaiFaces = apiResponse.outputs[0].data.regions;
			if(clarifaiFaces){
				const result = generateResult(clarifaiFaces);
				tableElement = result.tableElement;
				faceBoxElement = result.faceBoxElement; 
			}
		}

		
	}
	else if (imageStatus === 'invalid'){
		return(<div className = 'center ma'>
							<p className = 'mt4 f4 fw5'>{"Link does not redirects to image. Please check the link and try again"}</p>
						</div>);
		 
	}
	
	if(imageStatus !== 'empty'){
		if(!tableElement){
			tableElement = <p className = 'mt4 f4 fw5'>{"Processing........"}</p>
		}

		faceBoxRenderElement = 
				<div className = 'absolute mt2'>
						<img id = "inputImage" alt = 'Celebrity faces' src = {imageUrl} width = '500px' height = 'auto' style = {{ border: '3px solid #021a40' }}/>
					{faceBoxElement}
				</div>;
	}

	return (
		<div>
			{tableElement}
			<div className = 'center ma'>
				{faceBoxRenderElement}
			</div>
		</div>
	);
}

export default CelebrityDetectionView;