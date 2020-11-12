import React from "react";
import CenteredPhoto from "../Components/CenteredPhoto";
import DescriptionCols from "../Components/DescriptionCols";
import InBrief from "../Components/InBrief";
import SiteHeader from "../Components/SiteHeader";

const About = () => {
  const title =
    "We empower innovators by delivering access to the financial system";

  const descriptionColsData = [
    [
      {
        title: "Our Vision",
        text:
          "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
      },
      {
        title: "Our Business",
        text:
          "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
      },
    ],
    [
      {
        title: "The Culture",
        text:
          "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
      },
      {
        title: "The People",
        text:
          "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
      },
    ],
  ];

  return (
    <>
      <SiteHeader title={title} about="about" />
      <DescriptionCols about="about" data={descriptionColsData[0]} />
      <CenteredPhoto />
      <InBrief />
      <DescriptionCols about="about" data={descriptionColsData[1]} />
    </>
  );
};

export default About;
