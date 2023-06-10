const defaultTheme = require('tailwindcss/defaultTheme')

const screens = {
	...defaultTheme.screens,
	'sm-max': {max: `${parseInt(defaultTheme.screens.sm) - 1}px`},
	'lg-max': {max: `${parseInt(defaultTheme.screens.lg) - 1}px`},
}

const extraColumns = {
	13: '13',
	14: '14',
	15: '15',
	16: '16',
	17: '17',
	18: '18',
	19: '19',
	20: '20',
	21: '21',
	22: '22',
	23: '23',
	24: '24',
	25: '25',
	26: '26',
	27: '27',
};

const colors = {
	white: '#FFFFFF',
	dark: '#000000',
	sun: '#F9BB0C',
	mirage: '#1D2A35',
	iron: '#D5D9DD',
	woodsmoke: '#0B0D0E',
	athensgray:'#F8F8F9',
};

const max = px => {
	return `max(${Math.max(10, px * 0.8)}px,${px / 16}rem)`;
};

const { fontFamily } = require('tailwindcss/defaultTheme');

const regularSpacing = new Array(450).fill(null).reduce((result, item, i) => {
	result[i] = i < 4 ? `${i}px` : `${i / 16}rem`;
	return result;
}, {});

const largeSpecificSpacing = [545, 583, 600, 700, 758, 1400].reduce((result, item) => {
	result[item] = `${item / 16}rem`;
	return result;
}, {});

const spacing = {
	...regularSpacing,
	...largeSpecificSpacing,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/comps/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		{
			pattern: /col-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27)/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'],
		},
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--manrope)', ...fontFamily.sans],
				bebas: ['var(--bebas)', ...fontFamily.sans],
				manrope: ['var(--manrope)', ...fontFamily.sans],
			},
			gridColumnStart: extraColumns,
			gridColumnEnd: extraColumns,
			gridTemplateColumns: {
				container: '[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]',
			},
			colors,
			fontSize: {
				12: [
					max(12),
					{
						lineHeight: '1',
					},
				],
				14: [
					max(14),
					{
						lineHeight: '1.5',
					},
				],
				18: [
					max(18),
					{
						lineHeight: '1.5',
					},
				],
				20: [
					max(20),
					{
						lineHeight: '1.35',
					},
				],
				24: [
					max(24),
					{
						lineHeight: '1.3',
						letterSpacing: '-0.02em',	
					},
				],
				32: [
					max(32),
					{
						lineHeight: '1.35',
					},
				],
				48: [
					max(48),
					{
						lineHeight: '1',
					},
				],
				60: [
					max(60),
					{
						lineHeight: '1',
					},
				],
				80: [
					max(80),
					{
						lineHeight: '1',
					},
				],
			},
			spacing,
			letterSpacing : {
				tight: '-.02em',
				zero: '0',
				one: '.01em',
				wide: '.02em',
				wider: '.04em',
				huge: '.1em',
			},
			screens,
		},
	},
	plugins: [],
};
