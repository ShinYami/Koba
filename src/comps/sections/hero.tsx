import Col from '../Layout/Col';
import Container from '../Layout/Container';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export type HeroProps = {
	Cover?: string
}

export default function Hero({Cover}: HeroProps) {
	const variants = {
		initial: {
		  opacity: 1
		},
		animation: {
		  opacity: .5
		}
	}
	
	const speed = 1.5;
	const { scrollYProgress } = useScroll();
	const transform = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

	return (
		<motion.header 	style={{ y: transform }}  className='relative z-20 pb-110 pt-116'>
			<Container className='relative z-50'>
				<Col className='!flex flex-row gap-x-16 mb-98 text-12 tracking-huge' colStart={[2]} colEnd={[26]}>
					<span>
						Accueil
					</span>
					/
					<span className=''>
						À propos
					</span>
				</Col>
			</Container>
			<Container className="relative z-50">
				<Col colStart={[2]} colEnd={[20, 20, 20, 13, 13]} className='uppercase text-80'>
					<span className='pb-24 uppercase text-12 tracking-huge'>À propos de</span>
					<h2 className='uppercase font-regular text-80 font-bebas lg-max:text-60'>Koba express, votre partenaire logistique</h2>
				</Col>
				<Col colStart={[2, 2 , 2, 15, 15]} colEnd={[26]}>
					<div className='relative flex flex-col justify-end lg:-top-10 lg-max:mt-20'>
						<p className='flex pb-16 text-18'>Nous sommes une société familiale spécialisée dans le transport de marchandises, tant en Belgique qu’à l’international.</p>
						<p className='text-14 lg-max:mt-20'>Nos responsables jouissent de plusieurs décennies d’expérience dans le service de livraison pour professionnels, le transport express et le stockage sécurisé. Notre objectif est de fournir à nos clients un service logistique sur mesure aussi complet et compétitif que possible.</p>
					</div>
				</Col>
			</Container>
			<motion.figure 
				className="absolute inset-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-20 before:bg-mirage before:opacity-20"
				variants={variants}
				initial="intial"
				animation="animation"
				style={{ y: transform }}
			>
				<Image
					className='absolute inset-0 z-10 object-cover w-full h-full'
					src={Cover}
					alt={'alt'}
				/>
			</motion.figure>
		</motion.header>
	)
}