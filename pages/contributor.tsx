import GetAppSection from 'components/Contributor/GetAppSection';
import MeetSection from 'components/Contributor/MeetSection';
import PredictSection from 'components/Contributor/PredictSection';
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import type { NextPage } from "next";
import { Fragment } from "react";

const Contributor: NextPage = () => {
  

  return (
    <Fragment>
      <Header />
      <PredictSection />
      <MeetSection />
      <GetAppSection />
      <Footer />
    </Fragment>
  );
};

export default Contributor;


