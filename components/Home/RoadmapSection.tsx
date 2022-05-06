import React from "react";
import { ROADMAPS } from "assets/constants";

const RoadmapItem: React.FC<{
	key: number;
	card: {
		title: string;
		date: string;
		list: string[];
	};
}> = ({ card }) => {
	return (
		<div className="bg-white p-6 rounded-2xl flex flex-col gap-[6px]">
			<p className="font-semibold text-black text-lg capitalize">
				{card.title}
			</p>
			<p className="font-medium text-gray-800 text-sm uppercase">{card.date}</p>
			{card.list.length > 0 && (
				<ul className="list-disc pl-6">
					{card.list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			)}
		</div>
	);
};

const Roadmap: React.FC = () => {
	return (
		<section className="relative py-[100px] bg-[url('/images/bg-2.png')] bg-no-repeat bg-center bg-cover">
			<div className="max-w-[1040px] mx-auto">
				<div className="flex flex-col justify-center items-center text-center gap-6 tracking-[0.27px]">
					<h3 className="font-bold text-[57px] leading-[80px] text-normal-400 max-w-[746px]">
						Our public roadmap
					</h3>
					<p className="text-normal-400 font-medium font-caption max-w-[615px]">
						The below view is an insight into what we’re currently working on,
						what's coming up and what is planned
					</p>
				</div>
				<div className="grid grid-cols-3 gap-[21px] mt-[55px]">
					{ROADMAPS.map((roadmap) => (
						<div
							key={roadmap.label}
							className="p-6 pb-20 rounded-[14px] bg-white bg-opacity-50 shadow-type-3"
						>
							<p className="font-bold text-black text-2xl">{roadmap.label}</p>
							<div className="grid gap-6 mt-6">
								{roadmap.cards.map((card, idx) => (
									<RoadmapItem key={idx} card={card} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
