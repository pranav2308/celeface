function onFacesButtonSubmitChange(event){
	this.setState({imageUrl : this.state.inputString,
								homeMode : 'FaceDetection',
								apiResponse : ''});
	this.setImageStatus(this.state.inputString);
	
	this.callClarifaiFaceDetect(this.state.inputString);	
}

function onCelebrityButtonSubmitChange(event){
	this.setState({imageUrl : this.state.inputString,
								homeMode : 'CelebrityDetection',
								apiResponse : ''});

	this.setImageStatus(this.state.inputString);
	this.callClarifaiCelebrityDetect(this.state.inputString);
}

function setImageStatus(imageUrl){
	/*
	* Check if image url is inserted by user
	* If valid image url is inserted then update the user's image entries
	* else display error and signout the user. 
	*/
	
	if(imageUrl === ''){
		this.setState({imageStatus : 'empty'});
	}
	else{
		let img = new Image();
		img.onload = function(){
			
			fetch('https://celeface-server.herokuapp.com/image', {
				method : 'put',
				headers : {'Content-Type' : 'application/json'},
				body : JSON.stringify({
					id : this.state.user.id,
					imageUrl : imageUrl,
					email : this.state.user.email
				})
			})
			.then(response => {
				if(response.status === 200){
					return response.json();
				}else{	//if response status is 406 or 400
					this.onSignedOutRouteChange('signin');
					alert('Something went wrong! Please login again');
					return null;
				}
			})
			.then(entries => {
				if(entries){
					this.setState({user : Object.assign(this.state.user, {entries : entries}),
									imageStatus : 'valid'});
				}
			}).catch(() => {
				this.onSignedOutRouteChange('signin');
				alert("Oops! It seems that you are disconnected. Please check your connection and try to sign-in again");
			})

		}.bind(this);

		img.onerror = function(){
			this.setState({imageStatus : 'invalid'});
		}.bind(this);

		img.src = imageUrl;
	}
}



export { onFacesButtonSubmitChange, onCelebrityButtonSubmitChange, setImageStatus };