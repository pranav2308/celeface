import React from 'react';


const getTableContent = (leaders) => {
	return leaders.map(function(leader, index){
		return (
			<tr key = {index}>
				<td className="pv3 f4 pr3 bb b--black-20">{index + 1}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.firstname}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.lastname}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.country}</td>
				<td className="pv3 f4 pr3 bb b--black-20">{leader.entries}</td>
			</tr>
		);
	});

}

export {getTableContent};