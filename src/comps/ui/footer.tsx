import { useEffect } from 'react';
import Col from '../Layout/Col';
import Container from '../Layout/Container';

import Marquee from '../components/marquee';
// import Caracal from '../../svg/Caracal.svg'
// import Koba from '../../svg/koba.svg'

export default function Footer() {
	// useEffect(() => {
	// 	const footer = document.querySelector('footer');
	// 	const footerHeight = footer?.clientHeight;
	// 	document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener('resize', () => {
	// 		const footer = document.querySelector('footer');
	// 		const footerHeight = footer?.clientHeight;
	// 		document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
	// 	});
	// }, []);

	const elements = [
		'Koba messagerie',
		'Koba express',
		'Koba stockage',
	]

	return (
		<footer className="sticky bottom-0 left-0 right-0 text-white bg-mirage pt-52 pb-46">
			<Marquee baseVelocity={-2}>
				{elements.map((element, i) => (
					<span key={i} className="block mr-100">{element}</span>
				))}
			</Marquee>
			<Container className='pt-50'>
				<Col>
					<div 
						className="relative flex flex-row flex-nowrap gap-x-100 pb-50 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:w-full before:bg-sun before:h-1 before:z-10"
						itemscope
            			itemtype="http://schema.org/Organization"
					>
						<h2 className='sr-only'>Koba</h2> 
						<address  
							className='flex flex-row not-italic flex-nowrap gap-x-32 text-16 font-regular'
							itemprop="address"
                			itemscope
                			itemtype="http://schema.org/PostalAddress">
								
							<div className='flex flex-col gap-y-5'>
								<div itemprop="name">Koba Express SRL</div>
								<div itemprop="streetAddress">Rue Adolphe Quetelet 1 bte 7</div>
								<div>
									<span itemprop="postalCode">7180 </span>
									<span itemprop="addressLocality">Seneffe</span>
								</div>
							</div>

							<div className='flex flex-col gap-y-5'>
								<span>+32 64 22 70 04</span>
								<span>info@kobaexpress.be</span>
								<span>BE0598.941.346</span>
							</div>

						</address>
					</div>
				</Col>
				<Col>
					<div className='flex flex-row justify-between flex-nowrap text-18 pt-50 pb-100 font-regular'>
						<ul className='flex flex-row flex-nowrap gap-x-32'>
							<li>Accueil</li>
							<li>À propos</li>
							<li>Services</li>
							<li>Devis</li>
							<li>Contact</li>
						</ul>
						<ul className='flex flex-row flex-nowrap gap-x-32'>
							<li>Koba express</li>
							<li>Koba messagerie</li>
							<li>Koba stockage</li>
						</ul>
					</div>
				</Col>
				<Col>
					<div className='flex flex-row justify-between flex-nowrap'>
						<ul className='flex flex-row text-12 flex-nowrap gap-x-32'>
							<li>Plan du site</li>
							<li>Mentions légales</li>
							<li>Cookies</li>
						</ul>
						{/* <div>
							<Caracal className='block w-full opacity-100' alt='Caracal Agency' />
						</div> */}
					</div>
				</Col>
			</Container>
		</footer>
	);
}
