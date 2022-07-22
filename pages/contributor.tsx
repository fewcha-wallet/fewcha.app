import Head from "next/head";
import Footer from "components/Footer/Footer";

import Header from "components/Header/Header";
import type { NextPage } from "next";
import { Fragment } from "react";
import PredictSection from 'components/Contributor/PredictSection'
import MeetSection from 'components/Contributor/MeetSection'
import GetAppSection from 'components/Contributor/GetAppSection'

const Contributor: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <PredictSection />
      <MeetSection />
      <GetAppSection />
      <div className="h-[500px]">as</div>
      <Footer />
    </Fragment>
  );
};

export default Contributor;
