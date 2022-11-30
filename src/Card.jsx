import React from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Info from './Components/Info';
import Interests from './Components/Interests';

function Card () {
	return (
		<div className='card'>
			<div className='card-inner'>
				<Info />
				<div className='about-interests-cont'>
					<About />
					<Interests />
				</div>
				<div className='footer-container'>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Card;
