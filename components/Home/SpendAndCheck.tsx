import React from "react";
import { BROWSERS } from "assets/constants.js";

const SpendAndCheck: React.FC = () => {
	return (
		<section className="bg-[#f3f4f5] pt-[100px] pb-12">
			<div className="max-w-[1040px] mx-auto">
				<div className="flex flex-col justify-center items-center text-center gap-6">
					<h2 className="font-bold font-super text-normal-400 max-w-[760px]">
						Spend and trade digital assets like you were born to do.
					</h2>
					<p className="font-medium font-caption text-normal-400 max-w-[666px]">
						Fewcha is a new kind of wallet for the Aptos blockchain. It's not
						just about security - we've built it to be fully functional,
						feature-rich and ‘fewcha’ ready
					</p>
				</div>
				<div className="grid grid-cols-2 gap-y-6 gap-x-5 mt-20">
					<div className="col-span-2 bg-primary-200 rounded-[24px] relative py-[115px] px-12 flex items-center gap-x-[170px] overflow-hidden">
						<div className="flex flex-col gap-6 text-white relative z-[1] flex-1">
							<h4 className="font-bold text-[52px] leading-[58px] tracking-[0.27px]">
								A fully secured wallet for Aptos blockchain
							</h4>
							<p>
								Fewcha offers high security and full functions of buying,
								sending, receiving, swapping and managing NFTs. It’s a new way
								to manage your digital assets.
							</p>
						</div>
						<figure className="block relative z-[1] h-[268px] w-[288px]">
							<img
								src="/images/graphic-1.png"
								alt="graphic-1"
								className="h-full"
							/>
						</figure>
						<div className="bg-[url('/images/logo-overlay.png')] absolute top-0 -right-[13%] bottom-0 w-full bg-no-repeat bg-[center_right] mix-blend-soft-light opacity-50 pointer-events-none"></div>
					</div>

					<div className="bg-normal-500 flex flex-col items-center rounded-3xl p-12 text-white">
						<h6 className="font-bold text-4xl tracking-[0.27px] text-center mb-[54px]">
							Your privacy matters
						</h6>
						<img src="/images/graphic-2.png" alt="graphic-2" />
						<p className="text-center mt-[50px] text-base tracking-[0.27px]">
							Only you can access your wallet. We don’t collect any personal
							data.
						</p>
					</div>

					<div className="bg-white flex flex-col items-center rounded-3xl p-12 text-normal-500">
						<h6 className="font-bold text-4xl tracking-[0.27px] text-center mb-[54px]">
							Independently audited
						</h6>
						<img src="/images/graphic-3.png" alt="graphic-3" />
						<p className="text-center mt-[54px] text-base tracking-[0.27px]">
							Fewcha's safety and security will be thoroughly audited by
							Verichains
						</p>
					</div>

					<div className="col-span-2 flex items-center gap-x-[325px] p-12 bg-white rounded-3xl">
						<div className="grid gap-6 text-normal-500 tracking-[0.27px] flex-1">
							<h6 className="font-bold text-4xl leading-[47px]">
								Fewcha is available on multiple platforms
							</h6>
							<p className="text-base">
								Turn your favorite browsers into a Web3 enabled crypto wallet.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-x-[38px] gap-y-7">
							{BROWSERS.map((browser) => (
								<div
									key={browser.label}
									className="p-4 bg-white rounded-[14px] bg-opacity-50 shadow-type-3"
								>
									<img src={browser.url} alt={browser.label} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpendAndCheck;
