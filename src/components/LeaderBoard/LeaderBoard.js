import React from 'react';

const LeaderBoard = ({ leaders }) => {
	let renderElem = leaders.map(function(leader, index){
		return (
			<tr key = {index}>
				<td className="pv3 f4 pr3 bb b--black-20">{index + 1}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.firstname}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.lastname}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.country}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.entries}</td>
			</tr>
		);
	})

	return (
		<div className="pa4">
			<div className="overflow-auto">
	    		<table className="f6 w-100 mw8 center" cellSpacing="0">
		      		<tbody className = "lh-copy pa3 ml-auto mr-auto">
		      			<tr>
		      				<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Sr.No.</td>
		      				<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">First Name</td>
				        	<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Last Name</td>
				        	<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Country</td>
				        	<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Entries</td>
				        </tr>
			        	{renderElem}
		      		</tbody>
	    		</table>
			</div>
		</div>
	);
}




export default LeaderBoard;