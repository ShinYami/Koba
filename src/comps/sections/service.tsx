import classNames from 'classnames';
import Col from '../Layout/Col';
import Container from '../Layout/Container';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Service() {
	return (
		<section className='relative z-20 pb-40 text-woodsmoke pt-57 bg-white rounded-[30px]'>
			<Container>
				<Col colStart={[2]} colEnd={[12]}>
					<div>
						<span className='uppercase text-12 tracking-huge'>Un service sur-mesure</span>
						<h2 className='mt-16 uppercase text-48 font-bebas font-regular'>Une flotte de véhicules adaptés de l’enveloppe à la palette</h2>
					</div>
				</Col>
				<Col colStart={[17]} colEnd={[26]}>
					<div className='mt-100'>
						<p className='text-14'>Les besoins de nos clients professionnels présentent une grande diversité. Transport express, enlèvement, stockage, conditionnement, transport et livraison de marchandises lourdes... course urgente ou transport régulier, nous connaissons bien vos besoins. Pour y répondre, au fil du temps nous avons investi dans une flotte de véhicules capable de répondre à chaque demande dans les délais les plus courts possible.</p>
					</div>
				</Col>
			</Container>

			<Container className='mt-80'>
				<Col className='mb-42' colStart={[2]}>
					<h3 className='font-semibold text-24'>Ainsi, pour vous servir nous proposons :</h3>
				</Col>

				<Col colStart={[2]}>
					<ul className='grid grid-cols-1 lg:grid-cols-4 gap-x-24 gap-y-24 [counter-reset:section]'>
						{[1,2,3,4,5,6,7].map((i) => (
							<li className={classNames(
								"[counter-increment:section] marker:[content:counters(section,'.')]",
								i > 4 ? '' : 'mb-24',
							)} key={i}>
								<div className="pt-12 relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:w-full before:bg-iron">
									<h4 className='mb-8 font-semibold text-20'>Véhicules légers</h4>
									<p className='text-12'>Pour les colis, les enveloppes et les palettes jusqu’à 500 kg.</p>
								</div>
							</li>
						))}
					</ul>
				</Col>
			</Container>
		</section>
	)
}