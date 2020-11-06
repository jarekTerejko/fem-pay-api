import React from "react";
import Features from "../Components/Features";
import Install from "../Components/Install";
import Partners from "../Components/Partners";
import SectionHero from "../Components/SectionHero";
import SimpleUiUx from "../Components/SimpleUiUx";

const Home = () => {
  return (
    <>
      <SectionHero />
      <Partners />
      <Install />
      <SimpleUiUx />
      <Features/>
    </>
  );
};

export default Home;
