import React from "react";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Install from "../Components/Install";
import Partners from "../Components/Partners";
import Question from "../Components/Question";
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
      <Question/>
      <Footer/>
    </>
  );
};

export default Home;
