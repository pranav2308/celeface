function callClarifaiFaceDetect(imageUrl){
	/* 
	* Calls the server api for clarifai face detect
	* If response is valid then stored in app state
	* else appropriate alert is pulled.   
	*/
	fetch('https://celeface-server.herokuapp.com/faces', {
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			imageUrl : imageUrl,
		})
	})
	.then(response => {
		if(response.status === 200){
			return response.json();
		}else if(response.status === 500 || response.status === 400){
			alert("There seems to be some problem with API request. Please contact the administrator regarding this");
			return null;
		}else{//if the status code is 406
			return null;
		}
	})
	.then(apiResponse => {
		if(apiResponse){
			this.setState({apiResponse : apiResponse});	
		}
	})
	.catch(() => {
		this.onSignedOutRouteChange('signin');
		alert("Oops! It seems that you are disconnected. Please check your connection and try to sign-in again");
	});
}

function callClarifaiCelebrityDetect(imageUrl){

	/* 
	* Calls the server api for clarifai celebrity detect
	* If response is valid then stored in app state
	* else appropriate alert is pulled.   
	*/

	fetch('https://celeface-server.herokuapp.com/celebrity', {
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			imageUrl : imageUrl,
		})
	})
	.then(response => {
		if(response.status === 200){
			return response.json();
		}
		else if(response.status === 500 || response.status === 400){
			alert("There seems to be some problem with API request. Please contact the administrator regarding this");
			return null;
		}else{//if the status code is 406
			return null;
		}
	})
	.then(apiResponse => {
		if(apiResponse){
			this.setState({ apiResponse : apiResponse });
		}
	})
	.catch(() => {
		this.onSignedOutRouteChange('signin');
		alert("Oops! It seems that you are disconnected. Please check your connection and try to sign-in again");
	});
}

export { callClarifaiFaceDetect, callClarifaiCelebrityDetect };