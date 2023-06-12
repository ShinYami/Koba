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
	const baseX = useMotionValue(0);
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((_t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="flex flex-row overflow-hidden flex-nowrap text-pickledbluewood">
			<motion.div className="flex flex-row flex-nowrap text-100 whitespace-nowrap font-bebas" style={{ x }}>
				{children}
				{children}
				{children}
				{children}
			</motion.div>
		</div>
	);
}

export default Marquee;