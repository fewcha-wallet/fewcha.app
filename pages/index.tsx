import Head from "next/head";
import type { NextPage } from "next";
import { Fragment } from "react";
import Header from "components/Header/Header";
import HeroSection from "components/Home/HeroSection";
import SpendAndCheck from "components/Home/SpendAndCheck";
import RoadmapSection from "components/Home/RoadmapSection";
import Footer from "components/Footer/Footer";
import ReadySection from "components/Home/ReadySection";

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Aptos Wallet</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<HeroSection />
				<SpendAndCheck />
				<RoadmapSection />
				<ReadySection />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
