import '../styles/global.css';

import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

import Grid from '../comps/Layout/Grid';
import Footer from '../comps/ui/footer';

const jetbrains = localFont({
	src: [
		{
			path: '../../public/fonts/JetBrainsMono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/JetBrainsMono-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--jetbrains',
});

const karla = localFont({
	src: [
		{
			path: '../../public/fonts/Karla-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--karla',
});

function MyApp({ Component, pageProps }: AppProps) {
	if (typeof window !== 'undefined') {
		let resizeTimer: ReturnType<typeof setTimeout>;

		window.addEventListener('mousemove', function () {
			document.body.classList.add('is-using-mouse');
			document.body.classList.remove('is-using-touch');
		});

		window.addEventListener('touchstart', function () {
			document.body.classList.remove('is-using-mouse');
			document.body.classList.add('is-using-touch');
		});

		window.addEventListener('resize', function () {
			document.body.classList.add('is-resizing');
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function () {
				document.body.classList.remove('is-resizing');
			}, 400);
		});
	}

	return (
		<div className={`${karla.variable} ${jetbrains.variable} font-karla`}>
			<Component {...pageProps} />
			<Footer />
			<Grid />
		</div>
	);
}

export default MyApp;
