import React from "react";
import PricingMain from "../Components/PricingMain";
import SiteHeader from "../Components/SiteHeader";
import Question from "../Components/Question";
import Footer from "../Components/Footer";

const Pricing = () => {
  const title = "Pricing";

  return (
    <>
      <SiteHeader title={title} />
      <PricingMain />
      <Question />
      <Footer />
    </>
  );
};

export default Pricing;
