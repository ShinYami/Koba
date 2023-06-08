import Col from '../Layout/Col';
import Container from '../Layout/Container';

import EngagementCard from '../components/engagementCard';

export default function Engagements() {
	return (
		<section className='text-woodsmoke'>
			<Container>
				<Col>
					<small className='font-medium text-12'>Ils nous tiennent à coeur...</small>
					<h2 className='mt-16 mb-40 text-48 font-bebas font-regular'>Nos engagements</h2>
				</Col> 
			</Container>

			<Container>
				<Col>
					<ul className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-24'>
						{[1,2,3].map((i) => (
							<EngagementCard>{i}</EngagementCard>
						))}
					</ul>
				</Col> 
			</Container>
		</section>
	)
}