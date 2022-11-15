import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';

export default function Info () {
	const sendEmail = () => {
		window.location.href = 'mailto:harvey.AaronJ@gmail.com';
	};

	return (
		<div className='info'>
			<div id='info-photo-container'>
				<img id='photo' src='./src/Images/Photo.jpg' />
			</div>
			<div id='info-text'>
				<h1>Aaron Harvey</h1>
				<h3>Fullstack Developer</h3>
				<h3>website goes here </h3>
			</div>
			<div className='button-container'>
				<button onClick={sendEmail} id='email-button'>
					<MdAlternateEmail id='email' /> Email
				</button>
				<button>
					<SiLinkedin /> LinkedIn
				</button>
			</div>
		</div>
	);
}
