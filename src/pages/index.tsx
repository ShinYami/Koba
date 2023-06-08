import type { NextPage } from 'next';
import Head from 'next/head';

import About from '../comps/home/about';
import Hero from '../comps/home/hero';
// import Col from '../comps/Layout/Col';
// import Container from '../comps/Layout/Container';

const Page: NextPage = () => {
	return (
		<main className="py-[5rem] min-h-screen" id="#content">
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <Container>
				<Col className="bg-red-100" colEnd={[25, null, 18, null, 14]}>
					<p>Lorem ipsum</p>
				</Col>

				<Col className="bg-blue-100" colStart={[2, null, 18, null, 14]} colEnd={[25, null, 24, null, 26]}>
					<p>Lorem ipsum</p>
				</Col>
			</Container> */}

			<Hero />
			<About />
		</main>
	);
};

export default Page;
