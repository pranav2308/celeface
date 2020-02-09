import React from 'react';
import {getTableContent} from './Utils';
import LeaderBoardView from './LeaderBoardView';

const LeaderBoard = ({ leaders }) => {
	
	return (
		<LeaderBoardView
			leaders = {leaders}
			getTableContent = {getTableContent}
		/>
	);
}




export default LeaderBoard;