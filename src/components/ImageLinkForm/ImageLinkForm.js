import React from 'react';
import './ImageLinkForm.css';
 


const ImageLinkForm = ({inputString, onSearchChange, onFacesButtonSubmitChange, onCelebrityButtonSubmitChange}) => {
	return(
	<div>
		<p className = 'f3'>
		 {'Input the Image link in the following text box and see the magic!'}
		</p>
		<div className = 'center'>
			<div className = 'form center pa3 br3 shadow-5'>
				<input className = 'f4 pa1 w-80 center' type = 'text' value = {inputString} onChange = {onSearchChange}/>	
				<button className = 'w-30 grow ma1 f4 link ph1 pv2 dib white bg-light-purple' onClick = {onFacesButtonSubmitChange}>Faces</button>
				<button className = 'w-30 grow ma1 f4 link ph1 pv2 dib white bg-light-purple' onClick = {onCelebrityButtonSubmitChange}>Celebrity</button>
			</div>
		</div>
	</div>
	);
}

export default ImageLinkForm;