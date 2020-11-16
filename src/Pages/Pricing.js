import React from "react";
import PricingMain from "../Components/PricingMain";
import SiteHeader from "../Components/SiteHeader";

const Pricing = () => {
  const title = "Pricing";

  return (
    <>
      <SiteHeader title={title} />
      <PricingMain />
    </>
  );
};

export default Pricing;
