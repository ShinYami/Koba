import Col from "../Layout/Col"
import Container from "../Layout/Container"

// import Map from '../../svg/map.svg'

export default function Highlight()	{
	return (
		<Container>
			<Col className="bg-athensgray rounded-[20px]">
				<p className="text-32 py-68">Travailler avec Koba Express, <span className="text-sun">société de référence pour la livraison de vos colis</span>, c’est nous confier vos soucis logistiques et vous concentrer sur vos process de production et de commercialisation l’esprit tranquille.</p>
				{/* <Map className="absolute left-0" alt='Map' /> */}
			</Col>
		</Container>
	)
}