import '../styles/global.css';

import { Bebas_Neue , Manrope } from '@next/font/google';
import type { AppProps } from 'next/app';

const bebas = Bebas_Neue({
	subsets: ['latin'],
	style: 'normal',
	variable: '--bebas',
	weight: '400'
});

const manrope = Manrope({
	subsets: ['latin'],
	style: 'normal',
	variable: '--manrope',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${manrope.variable} ${bebas.variable} font-manrope`}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
