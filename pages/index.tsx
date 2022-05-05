import Footer from "components/Footer/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div></div>
        <div></div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
