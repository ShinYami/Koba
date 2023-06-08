import Col from '../Layout/Col';
import Container from '../Layout/Container';


export default function Contact() {
	return (
		<aside>
			<Container>
				<Col colStart={[2]} colEnd={[12]}>
					<div className=''>
						<small className='text-12'>N’hésitez pas à</small>
						<h2 className='pt-16 uppercase text-48 font-bebas'>Nous contacter</h2>
					</div>
				</Col>
			</Container>
		</aside>
	)
}