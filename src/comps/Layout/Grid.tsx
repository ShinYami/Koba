import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Col from '../Layout/Col';
import Container from '../Layout/Container';

export default function Grid() {
	const [isVisible, setIsVisible] = useState(true);
	const gridColumns: Number = 26;

	useEffect(() => {
		document.body.addEventListener('keydown', handleKeyDown);
		return () => document.body.removeEventListener('keydown', handleKeyDown);
	}, []);

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'g') {
			setIsVisible((prev) => !prev);
		}
	}

	// Press G to toggle the grid
	return (
		<Container className={classNames(
			'gridContainer h-screen w-full fixed opacity-60 inset-0 origin-top pointer-events-none z-10',
			{ 'grid-visible': !isVisible }
		)}>
			{Array.from(Array(gridColumns).keys()).map((i) => (
				<Col key={i} className="bg-red-100 w-[.1rem]" colStart={[{i}]} colEnd={[{i}]}></Col>
			))}
		</Container>
	);
}
