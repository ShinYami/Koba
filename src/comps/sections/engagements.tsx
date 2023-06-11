
import { useRef } from 'react';
import Col from '../Layout/Col';
import Container from '../Layout/Container';

import { useInView } from 'framer-motion';

import EngagementCard from '../components/engagementCard';

export default function Engagements() {
	const section = useRef(null);
	const isInView = useInView(section, { 
		once: true,
		margin: '-150px 0px',
	});

	// console.log(isInView);

	return (
		<section className='text-woodsmoke pb-80'>
			<Container>
				<Col>
					<small className='font-medium uppercase text-12 tracking-huge'>Ils nous tiennent à coeur...</small>
					<h2 className='mt-16 mb-40 text-48 font-bebas font-regular'>Nos engagements</h2>
				</Col> 
			</Container>

			<Container>
				<Col>
					<ul className='grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-24' ref={section}>
						{[1,2,3].map((i) => (
							<EngagementCard key={i} index={i} style={{
								i: --i,
								opacity: isInView ? 1 : 0,
								transform: isInView ? "translateY(0)" : "translateY(100px)",
								// transformOrigin: "center",
								transition: "all 0.5s ease-in-out",
								transitionDelay: `${i * 0.1}s`
							}}/>
						))}
					</ul>
				</Col> 
			</Container>
		</section>
	)
}