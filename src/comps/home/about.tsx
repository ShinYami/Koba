import Image from 'next/image';

import cover from '../../../public/assets/placeholder.jpg';
import Col from '../Layout/Col';
import Container from '../Layout/Container';

export default function About() {
	return (
		<section className="relative">
			<Container className="grid-rows-1">
				<Col className="relative z-20 row-start-1 row-end-1 items-center" colStart={[3]} colEnd={[14]}>
					<h2 className="text-7xl uppercase -mt-20">Lorem ipsum dolor sit</h2>
				</Col>

				<Col className="relative z-10 row-start-1 row-end-1">
					<figure className="relative aspect-[16/10] overflow-hidden">
						<Image className="block absolute inset-0 object-cover w-full h-full" src={cover} alt="cover" />
					</figure>
				</Col>
			</Container>
		</section>
	);
}
