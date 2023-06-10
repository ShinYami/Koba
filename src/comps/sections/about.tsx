import Col from '../Layout/Col';
import Container from '../Layout/Container';

// import { motion } from 'framer-motion';

import Image from 'next/image';

export default function About({Cover}) {
	return (
		<section className='pt-40 overflow-hidden text-woodsmoke pb-80'>
			<Container>
				<Col colStart={[14]} colEnd={[25]}>
					<div className='flex flex-col justify-center'>
					<small className='text-12 mt-21'>Lorem Ipsum dolor</small>
					<h2 className='pb-16 mt-16 uppercase text-48 font-bebas font-regular'>Une entreprise dynamique qui évolue avec le temps et avec vous</h2>
					<p className='mb-24 text-18'>Nous mettons un point d'honneur à ce qu'aucun obstacle ne vienne entraver l’acheminement des marchandises de nos clients.</p>
					<p className='text-14'>Les origines de notre activité familiale de transport et de livraison remontent loin, jusque dans les années 1960, à l’époque des cartes à trous et des tubes de verre.
					Mais nous sommes actuellement dans les années 2020 et, par souci de nous adapter à vos besoins, nous avons investi dans un logiciel performant de gestion optimisée des flottes et de suivi en temps réel des livraisons.
					De même, nous prenons soin de renouveler notre flotte de véhicules de transport régulièrement. Ainsi, nos livreurs peuvent opérer en Belgique et plus globalement, partout en Europe.</p>
					</div>
				</Col> 
				<Col className='-order-1' colStart={[2]} colEnd={[12]}>
					<figure className='relative overflow-hidden rounded-[20px] aspect-[555/483]'>
						<Image src={Cover} alt='alt' className='absolute inset-0 w-full h-full' />
					</figure>	
				</Col>
			</Container>
		</section>
	)
}