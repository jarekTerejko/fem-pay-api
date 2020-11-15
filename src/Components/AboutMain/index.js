import React from "react";
import FormBig from "../FormBig";
import {
  AboutMainWrapper,
  AboutMainColLeft,
  AboutMainCols,
} from "./AboutMainElements";
import {
  SectionPartnersColRight,
  SectionPartnersImg,
} from "../Partners/PartnersElements";
import { Container } from "../Container";
import { partnersDark } from "../../images/shared";

const AboutMain = () => {
  return (
    <AboutMainWrapper>
      <Container>
        <AboutMainCols>
          <AboutMainColLeft>
            <FormBig />
          </AboutMainColLeft>
          <SectionPartnersColRight>
            {partnersDark.map((partner, i) => {
              return <SectionPartnersImg src={partner} key={i} />;
            })}
          </SectionPartnersColRight>
        </AboutMainCols>
      </Container>
    </AboutMainWrapper>
  );
};

export default AboutMain;
