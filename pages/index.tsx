import Head from "next/head";
import type { NextPage } from "next";
import { Fragment } from "react";
import Header from "components/Header/Header";
import SpendAndCheck from "components/Home/SpendAndCheck";
import RoadmapSection from "components/Home/RoadmapSection";
import Footer from "components/Footer/Footer";
import ReadySection from "components/Home/ReadySection";
import HeroSection2 from "components/Home/HeroSection2";
import Scroll from "react-scroll";

const Element = Scroll.Element;

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Fewcha Aptos Wallet</title>
        <meta
          name="description"
          content="Fewcha Aptos Wallet - the wallet of layer 1 blockchain Aptos"
        />
        <meta property="og:site_name" content="Fewcha - Aptos Wallet" />
        <meta property="og:title" content="Fewcha - Aptos Wallet" />
        <meta
          property="og:description"
          content="Fewcha Aptos Wallet - the wallet of layer 1 blockchain Aptos"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fewcha.app/preview.jpg" />
        <meta
          property="og:image:alt"
          content="Preview of Fewcha Aptos Wallet website"
        />
        <meta property="og:url" content="https://fewcha.app" />
        <meta
          property="og:image:secure_url"
          content="https://fewcha.app/preview.jpg"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="418" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://fewcha.app/preview.jpg"
        />
        <meta property="twitter:site" content="@fewchawallet" />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main>
        <HeroSection2 />
        <SpendAndCheck />
        <Element name="roadmap">
          <RoadmapSection />
        </Element>
        <ReadySection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
