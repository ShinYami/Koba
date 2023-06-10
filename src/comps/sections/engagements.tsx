import classNames from 'classnames';
import { useRef } from 'react';
import Col from '../Layout/Col';
import Container from '../Layout/Container';

import { useInView } from 'framer-motion';

import EngagementCard from '../components/engagementCard';

export default function Engagements() {
	const section = useRef(null);
	const isInView = useInView(section, { once: false });

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
					<ul className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-24' ref={section}>
						{[1,2,3].map((i) => (
							<EngagementCard key={i} style={{
								i: --i,
								opacity: isInView ? 1 : 0,
								transition: "opacity 0.5s ease-in-out",
								transitionDelay: `${i * 0.1}s`
							}}/>
						))}
					</ul>
				</Col> 
			</Container>
		</section>
	)
}