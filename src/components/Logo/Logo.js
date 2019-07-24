import React from 'react';
import './Logo.css';
import Brain from './brain.png';
import Tilt from 'react-tilt'
 


const Logo = () => {
	return(<div className = 'ma4 mt0 '>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 125, width: 125 }} >
			<div className="Tilt-inner pa3">
				<img className = 'pa3' alt = 'Smart Brain Logo' src = {Brain}/> 
			</div>
		</Tilt>
	</div>
	);
}

export default Logo;