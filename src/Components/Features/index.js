import React from "react";
import { Container } from "../Container";
import {
  SectionFeatures,
  SectionFeaturesWrapper,
  SectionFeaturesCol,
  SectionFeaturesImg,
  SectionFeaturesTitle,
  SectionFeaturesP,
} from "./FeaturesElements";

import { data as dataFeatures } from "./dataFeatures";

const Features = () => {
  return (
    <SectionFeatures>
      <Container>
        <SectionFeaturesWrapper>
          {dataFeatures.map((feature, i) => {
            return (
              <SectionFeaturesCol key={i}>
                <SectionFeaturesImg src={feature.icon} />
                <SectionFeaturesTitle>{feature.title}</SectionFeaturesTitle>
                <SectionFeaturesP>{feature.description}</SectionFeaturesP>
              </SectionFeaturesCol>
            );
          })}
        </SectionFeaturesWrapper>
      </Container>
    </SectionFeatures>
  );
};

export default Features;
