import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoVenmo } from 'react-icons/io5';
import { handleClick } from '../Utils';

export default function Footer () {
	return (
		<div>
			{/* <button onClick={() => handleClick('https://github.com/AaronJHarvey')} id='github-button'>
				<FaGithubSquare />
			</button>
			<button onClick={() => handleClick('https://account.venmo.com/u/AaronJHarvey')} id='venmo-button'>
				<IoLogoVenmo />
			</button> */}

			<FaGithubSquare onClick={() => handleClick('https://github.com/AaronJHarvey')} id='github-button' />
			<IoLogoVenmo onClick={() => handleClick('https://account.venmo.com/u/AaronJHarvey')} id='venmo-button' />
		</div>
	);
}
