import React from 'react';
import './ImageLinkForm.css';
 


const ImageLinkForm = ({onSearchChange, onSubmitChange}) => {
	return(
	<div className = ''>
		<p className = 'f3'>
		 {'Input the Image link in the following text box and see the magic!'}
		</p>
		<div className = 'center'>
			<div className = 'form center pa4 br3 shadow-5'>
				<input className = 'f4 pa2 w-70 center' type = 'text' onChange = {onSearchChange}/>
				<button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onSubmitChange}>Shoot!</button>
			</div>
		</div>
	</div>
	);
}

export default ImageLinkForm;