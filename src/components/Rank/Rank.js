import React from 'react';
 


const Rank = ({userFirstName, userLastName, userEntries}) => {
	return(
	<div>
		<div className = 'white f3'>
			{userFirstName.concat(' ',userLastName,', your current image entries is/are.....')}
		</div>
		<div className = 'white f1'>
			{userEntries}
		</div>
	</div>
	);
}

export default Rank;