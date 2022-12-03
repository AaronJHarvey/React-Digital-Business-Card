import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import { handleClick } from '../Utils';

export default function Info () {
	return (
		<div className='info'>
			<div id='info-photo-container'>
				<img id='photo' src='/src/Images/Photo.jpg' />
			</div>
			<div id='info-text'>
				<h1>Aaron Harvey</h1>
				<h3>Fullstack Developer</h3>
				<h3>website goes here </h3>
			</div>
			<div className='button-container'>
				<button onClick={() => handleClick('mailto:harvey.AaronJ@gmail.com')} id='email-button'>
					<MdAlternateEmail id='email' /> Email
				</button>

				<button onClick={() => handleClick('https://www.linkedin.com/in/aaronjharvey1/')}>
					<SiLinkedin /> LinkedIn
				</button>
			</div>
		</div>
	);
}
