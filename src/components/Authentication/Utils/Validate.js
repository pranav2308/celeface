
const isNameValid = (name) => {
	/* 
	* Valid name must be non-empty. 
	*/
	return (Boolean(name.length));
} 

const isEmailValid = (email) => {
	/* 
	* Valid email must be in username@service.domain format. 
	*/
	let re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  	return re.test(email);
}

const isPasswordValid = (password) => {
	/* 
	* Valid password must have 1 lowercase, 1 uppercase, 1 special characeter and least length of 8 chars. 
	*/
	let re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	return re.test(password);
}

const isPasswordMatching = (password, reTypePassword) => {
	return (password === reTypePassword);
}

const isValidRegistrationForm = (entries) => {
	/* 
	* If name, email, password, re-typed password are matching then return true. 
	*/
	if(!isNameValid(entries.registerFirstName)){
		alert('First name cannot be empty!');
		return false;
	}
	else if(!isNameValid(entries.registerLastName)){
		alert('Last name cannot be empty!');
		return false;	
	}
	else if(!isEmailValid(entries.registerEmail)){
		alert('Email address entered is not valid');
		return false;	
	}
	else if(!isPasswordValid(entries.registerPassword)){
		alert('Password entered does not conform to password formatting rules');
		return false;
	}
	else if(!isPasswordMatching(entries.registerPassword, entries.registerReTypePassword)){
		alert("Your password and re-typed password does not match.");
		return false;
	}
	return true;
}

export {isValidRegistrationForm};