import React from 'react';

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


export { calculateFaceLocations, drawFaceBox };