import React from 'react';


const CelebrityDetection = ({ imageStatus, imageUrl, apiResponse }) => {
	let renderElement;
	if(imageStatus === 'valid'){

	}
	else if (imageStatus === 'invalid'){
		renderElement = <p className = 'mt4 f4 fw5'>{"Link does not redirects to image. Please check the link and try again"}</p>;
	}
	return (
		<div className = 'center ma'>
			{renderElement}
		</div>
	);
}

export default CelebrityDetection;