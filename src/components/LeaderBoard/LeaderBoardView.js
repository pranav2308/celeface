import React from 'react';


const LeaderBoardView = (props) => {
	const { leaders, getTableContent } = props;

	const renderElem = getTableContent(leaders);
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

export default LeaderBoardView;