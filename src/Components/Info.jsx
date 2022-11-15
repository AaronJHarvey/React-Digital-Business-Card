import React from 'react';

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
					Email
				</button>
				<button>LinkedIn</button>
			</div>
		</div>
	);
}
