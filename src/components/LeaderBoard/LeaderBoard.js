import React from 'react';

const LeaderBoard = ({ leaders }) => {
	let renderElem = leaders.map(function(leader, index){
		return (
			<tr>
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
	      				<th className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Sr.No.</th>
	      				<th className="fw6 f3 bb b--black-20 tl pa3 pr3 ">First Name</th>
			        	<th className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Last Name</th>
			        	<th className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Country</th>
			        	<th className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Entries</th>
			        {renderElem}
		      		</tbody>
	    		</table>
			</div>
		</div>
	);
}




export default LeaderBoard;