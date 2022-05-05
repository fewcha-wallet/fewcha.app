import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MENUS } from "assets/constants";
import AtButton from "components/AtButton";

const Header: React.FC = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		setScroll(window.pageYOffset > 20);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full z-[999] transition-all ease-in-out duration-300 ${
				scroll ? "is-scroll" : "py-14"
			}`}
		>
			<div className="max-w-[1040px] mx-auto flex items-center">
				<Link href="/">
					<a className="block">
						<img src="/svgs/logo.svg" alt="logo" />
					</a>
				</Link>

				<div className="flex items-center justify-center flex-1 gap-x-10">
					{MENUS.map((menu, idx) => (
						<Link href={menu.href} key={idx}>
							<a className="py-2 block text-normal-400 font-medium font-caption transition-all ease-in duration-150 hover:text-primary-200">
								{menu.name}
							</a>
						</Link>
					))}
				</div>

				<AtButton className="shadow-type-1 px-5 py-[14px] bg-white text-black font-medium rounded-[34px] hover:bg-inherit">
					Download
				</AtButton>
			</div>
		</header>
	);
};

export default Header;
