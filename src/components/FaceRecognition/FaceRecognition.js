import React from 'react';
import './FaceRecognition.css';
 

const calculateFaceLocations = (clarifaiFaces) => {
  
  let width, height;
  
  try{
  	const image = document.getElementById('inputImage');
	width = Number(image.width);
	height = Number(image.height);
  }catch(err){
  	width = 0;
  	height = 0;
  }
 
  return clarifaiFaces.map((element) => {
      const squarePercentages = element.region_info.bounding_box;
      return (
        {
          leftCol : squarePercentages.left_col * width,
          rightCol  : (1 - squarePercentages.right_col) * width,
          topRow : squarePercentages.top_row * height,
          bottomRow : (1 - squarePercentages.bottom_row) * height,
        }
      ); 
    });
  }


const drawFaceBox = (box, index) => {
	return <div className = "bounding-box" style = {{top : box.topRow, bottom : box.bottomRow, left : box.leftCol, right : box.rightCol}} key = {index}></div>;	
}


const FaceRecognition = ({imageStatus, imageUrl, apiResponse}) => {
	let faceBoxElement, renderElement;
	if (imageStatus === 'valid'){
		
		if (apiResponse !== ''){
			const clarifaiFaces = apiResponse.outputs[0].data.regions;
			if(clarifaiFaces){
				faceBoxElement = calculateFaceLocations(clarifaiFaces).map(drawFaceBox);	
			}
			
		}
		renderElement = <div className = 'absolute mt2'>
						<img id = "inputImage" alt = 'Input image' src = {imageUrl} width = '500px' height = 'auto'/>
						{faceBoxElement}
					</div>;
	}
	else if (imageStatus === 'invalid'){
		renderElement = <p className = 'mt4 f4 fw5'>{"Link does not redirects to image. Please check the link and try again"}</p>;
	}
	return(
		<div className = 'center ma'>
			{renderElement}
		</div>
	);
}

export default FaceRecognition;