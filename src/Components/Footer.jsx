import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoVenmo } from 'react-icons/io5';
import { handleClick } from '../Utils';

export default function Footer () {
	// const handleClick = (destination) => {
	// 	window.open(destination, '_blank');
	// };

	return (
		<div className='footer-container'>
			<button onClick={() => handleClick('https://github.com/AaronJHarvey')} id='github-button'>
				<FaGithubSquare />
			</button>
			<button onClick={() => handleClick('https://account.venmo.com/u/AaronJHarvey')} id='venmo-button'>
				<IoLogoVenmo />
			</button>
		</div>
	);
}
