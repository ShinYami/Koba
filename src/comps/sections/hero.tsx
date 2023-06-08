import Col from '../Layout/Col';
import Container from '../Layout/Container';

import Image from 'next/image';

export type HeroProps = {
	Cover?: string
}

export default function Hero({Cover}: HeroProps) {
	return (
		<header className='relative z-20 pb-40 pt-116'>
			<Container className='relative z-50'>
				<Col className='!flex flex-row gap-x-16 mb-98 text-12 tracking-huge' colStart={[2]} colEnd={[26]}>
					<span>
						Accueil
					</span>
					/
					<span>
						À propos
					</span>
				</Col>
				<Col colStart={[2]} colEnd={[26]}>
					<Col className='uppercase text-80' colEnd={13}>
						<span className='pb-24 uppercase text-12 tracking-huge'>À propos de</span>
						<h2 className='uppercase font-regular text-80 font-bebas'>Koba express, votre partenaire logistique</h2>
					</Col>
					<Col colStart={[15]} colEnd={[27]}>
						<div className='relative flex flex-col justify-end -top-10'>
							<p className='flex pb-16 text-18'>Nous sommes une société familiale spécialisée dans le transport de marchandises, tant en Belgique qu’à l’international.</p>
							<p className='text-14'>Nos responsables jouissent de plusieurs décennies d’expérience dans le service de livraison pour professionnels, le transport express et le stockage sécurisé. Notre objectif est de fournir à nos clients un service logistique sur mesure aussi complet et compétitif que possible.</p>
						</div>
					</Col>
				</Col>
			</Container>
			<figure className="absolute inset-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-20 before:bg-mirage before:opacity-20">
				<Image
					className='absolute inset-0 z-10 object-cover w-full h-full'
					src={Cover}
					alt={'alt'}
				/>
			</figure>
		</header>
	)
}