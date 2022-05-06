import React from "react";
import { BROWSERS } from "assets/constants";

const ReadySection: React.FC = () => {
	return (
		<div className="bg-[#f3f4f5] py-[100px]">
			<div className="container">
				<div className="bg-white flex flex-col text-center lg:text-left lg:flex-row items-center p-12 rounded-3xl gap-y-[60px] lg:gap-y-0">
					<div className="flex flex-col gap-6 flex-1 text-black">
						<h6 className="font-bold text-3xl md:text-4xl md:leading-[48px] tracking-[0.27px]">
							Ready to get started?
						</h6>
						<p className="text-base">
							Be the first wallet user of Aptos blockchain
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-16 flex-1">
						{BROWSERS.map((browser) => (
							<img key={browser.label} src={browser.url} alt={browser.label} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReadySection;
