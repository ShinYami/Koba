import Col from '../Layout/Col';
import Container from '../Layout/Container';

export default function Footer() {
	return (
		<footer className="py-[5rem]">
			<Container>
				<Col>
					<h2 className="text-xs uppercase text-center text-metal">footer @2023</h2>
				</Col>
			</Container>
		</footer>
	);
}
