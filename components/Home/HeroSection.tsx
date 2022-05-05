import AtButton from "components/AtButton";
import React from "react";

const HeroSection: React.FC = () => {
	return (
		<section className="max-w-[1040px] mx-auto">
			<div className="flex flex-col justify-center items-center text-center gap-6">
				<h1 className="font-bold text-[57px] leading-[80px] text-normal-400 max-w-[746px]">
					Your wallet for the next safest blockchain
				</h1>
				<p className="text-normal-400 font-medium font-caption max-w-[615px]">
					Fewcha was designed for any financial transactions you want to make
					with your digital assets in Aptos Blockchain
				</p>
				<AtButton className="shadow-type-2 px-[25px] py-[16px] font-semibold rounded-[34px] border-2 border-primary-100">
					Try Fewcha now
				</AtButton>
			</div>
			<figure className="w-full block mt-[70px]">
				<img src="/images/hero.png" alt="hero" />
			</figure>
		</section>
	);
};

export default HeroSection;
