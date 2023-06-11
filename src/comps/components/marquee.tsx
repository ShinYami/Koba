import { useRef } from "react";
import {
	motion,
	useTransform,
	useMotionValue,
	useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface MarqueeProps {
	children: string;
	baseVelocity: number;
}

function Marquee({ children, baseVelocity = 100 }: MarqueeProps) {
	const elements = [1, 2, 3, 4, 5]
	const baseX = useMotionValue(0);
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="flex flex-row overflow-hidden flex-nowrap text-pickledbluewood">
			<motion.div className="flex flex-row flex-nowrap text-100 whitespace-nowrap font-bebas" style={{ x }}>
				{elements.map((element, index) => (
					<span key={index} className="block mr-100">
						{children}
					</span>
				))}
			</motion.div>
		</div>
	);
}

export default Marquee;