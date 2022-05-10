import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MENUS } from "assets/constants";
import AtButton from "components/AtButton";
import HeaderMobile from "./HeaderMobile";
import styled from "styled-components";

const Hambuger = styled.div`
	position: relative;
	top: 0;
	right: 0;
	z-index: 5;
	padding: 11px;
	cursor: pointer;
	margin-left: auto;
	-webkit-tap-highlight-color: transparent;
	transition: opacity 0.25s ease, top 0.35s ease;
`;

const Header: React.FC = () => {
	const [scroll, setScroll] = useState(false);
	const [showMobile, setShowMobile] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		setScroll(window.pageYOffset > 20);
	};

	const toggleMobile = () => {
		setShowMobile(!showMobile);
		if (showMobile) document.body.style.overflow = "";
		else document.body.style.overflow = "hidden";
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full z-[999] transition-all ease-in-out duration-300 ${
				scroll ? "is-scroll" : "py-14"
			}`}
		>
			<div className="container xs:px-13 flex items-center">
				<Link href="/">
					<a className="block">
						<img src="/svgs/logo.svg" alt="logo" />
					</a>
				</Link>

				<div className="hidden md:flex items-center justify-center flex-1 gap-x-10">
					{MENUS.map((menu, idx) => (
						<Link href={menu.href} key={idx}>
							<a className="py-2 block text-normal-400 font-medium font-caption transition-all ease-in duration-150 hover:text-primary-200">
								{menu.name}
							</a>
						</Link>
					))}
				</div>

				<div className="relative ml-auto flex items-center gap-6">
					<AtButton className="hidden sm:inline-block shadow-type-1 px-5 py-[14px] bg-white text-black font-medium rounded-[34px] hover:bg-inherit">
						Download
					</AtButton>

					<div
						className={`block md:hidden hambuger ${
							showMobile ? "is-active" : ""
						}`}
						onClick={toggleMobile}
					>
						<span className="line"></span>
					</div>
				</div>
			</div>
			<HeaderMobile isShow={showMobile} />
		</header>
	);
};

export default Header;
