import Col from '../Layout/Col';
import Container from '../Layout/Container';

export default function Hero() {
	return (
		<header className="my-5 bg-red-100">
			<Container>
				<Col colEnd={[25, null, 18, null, 14]}>
					<h2 className="text-xl bg-blue-100">hero component</h2>
				</Col>
			</Container>
		</header>
	);
}
