import React from "react";
import SiteHeader from "../Components/SiteHeader";

const About = () => {
  const title =
    "We empower innovators by delivering access to the financial system";

  return (
    <>
      <SiteHeader title={title} about="about" />
    </>
  );
};

export default About;
