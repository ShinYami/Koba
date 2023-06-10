import type { NextPage } from 'next';
import Head from 'next/head';

import { Lenis } from '@studio-freight/react-lenis'

import Cover from '../../public/assets/placeholder.jpg'

import Hero from '../comps/sections/hero';
import Service from '../comps/sections/service';
import About from '../comps/sections/about';
import Solutions from '../comps/sections/solutions';
import Engagement from '../comps/sections/engagements';
import Contact from '../comps/components/contact';
import Footer from '../comps/ui/footer';
import Grid from '../comps/Layout/Grid';

import { motion, useScroll, useTransform } from 'framer-motion';


const Page: NextPage = () => {
	// const lenis = useLenis()

	const variants = {
		initial: {
		  opacity: 0
		},
		animation: {
		  opacity: 1
		}
	}

	const speed = 1.5;
	const { scrollYProgress } = useScroll();
	const transform = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

	return (
		<>
			<Head>
				<title>Koba</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Lenis root>
				<div>
					<main className="min-h-screen bg-mirage selection:bg-sun selection:text-mirage" id="#content">
						<Hero Cover={Cover} />
						<motion.div
							variants={variants}
							initial="intial"
							animation="animation"
							style={{ y: transform }}
							className='bg-white rounded-[30px] relative z-40 overflow-visible -mt-70'
						>
							<Service />
							<About Cover={Cover} />
							<Solutions />
							<Engagement />
							<Contact />
						</motion.div>

					</main>
					<Footer />
				</div>
			</Lenis>
			<Grid />
		</>
	);
};

export default Page;
