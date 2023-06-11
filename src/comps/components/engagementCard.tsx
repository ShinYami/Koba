import classNames from "classnames"

export default function EngagementCard({style, index}) {
	return (
		<li className='border-2 border-sun rounded-[8px] pb-60 px-40 pt-10' style={style}>
			<div>
				<div className="mb-20 overflow-hidden">
					<span className="block translate-y-40 text-sun text-120">0{index}</span>
				</div>
				<h3 className="relative pt-24 pb-24 text-24 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:bg-sun before:h-1 before:z-20">Fléxibilité & disponibilité</h3>
				<p className="text-14">Besoins réguliers, irréguliers, urgents, imprévus... vous pouvez nous trouver 24 heures par jour et 7 jours par semaine. En un rien de temps nous produisons une solution de livraison express sur mesure pour répondre à toute demande.</p>
			</div>
		</li>
	)
}