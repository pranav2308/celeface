function fetchLeaderBoard(){
	fetch('https://celeface-server.herokuapp.com/leaderboard')
	.then(response => {
		if(response.status === 200){
			return response.json();
		}
		else{ //if response status is 400
			return null;
		}
	})
	.then(data => {
		if(data){
			this.setState({ leaders : data });
		}
		else{
			alert('It seems server has lost connection with database. Please try leaderboard after some time');
			this.onSignedInRouteChange('home');
		}
	})	
}


function loadUser(user){
	/*route argument will be only home as of now but can be updated to include more features in future.
		method can be called from sign-in page (by clicking sign-in) or from register page (by clicking register).*/
	const newUser = {
		id : user.id,
		firstName : user.firstname,
		lastName : user.lastname,
		email : user.email,
		country : user.country,
		entries : user.entries,
		joinDate : user.joindate
	}
	this.setState({
		inputString : '',
		imageUrl : '',
		apiResponse : '',
		imageStatus : 'empty',
		user : newUser,
		isSignedIn : true,
		route : 'home', 
		homeMode : ''}); 
}

export { fetchLeaderBoard, loadUser };