import classNames from 'classnames';

import Col from '../Layout/Col';
import Container from '../Layout/Container';

import Highlight from '../components/highlight';

export default function Engagements() {
	const solutions = [
		{
			text: 'Réception 24/24 de vos demandes et devis gratuit'
		},
		{
			text: 'Service taillé sur mesure',
		},
		{	
			text: 'Meilleur rapport qualité/prix',
		},
		{
			text: 'Solutions de transport, livraison et même de stockage',
		},
		{
			text: 'Sécurité de vos marchandises et bon déroulement des opérations garantis',
		}
	];

	return (
		<section className='text-woodsmoke mb-80'>
			<Container>
				<Col colEnd={[12]}>
					<div>
						<small className='font-medium uppercase text-12 tracking-huge'>Une livraison complète</small>
						<h2 className='mt-16 mb-40 text-48 font-bebas font-regular'>Nos solutions de transport express à 360°</h2>
						<p className='text-14'>Vitesse, performance, flexibilité... si nous maîtrisons ces qualités, c’est dans le but unique de servir nos clients. Koba Express, plus qu’une entreprise de transport et de livraison express, se veut être un véritable partenaire logistique.</p>
					</div>
				</Col> 

				<Col colStart={16}>
					<div>
						<ul className='flex flex-col mt-152 mb-80'>
							{solutions.map((solution, i, _key) => (
								<li className={classNames(
									"relative before:content[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-iron before:z-10",
									{ 'before:hidden': i === solutions.length - 1 }
								)} key={_key}>
									<p className='py-8 text-16'>{solution.text}</p>
								</li>
							))}
						</ul>
					</div>
				</Col> 
			</Container>

			<Highlight />
		</section>
	)
}