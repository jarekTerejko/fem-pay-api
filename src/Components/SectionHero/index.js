import React from "react";
import { Container } from "../Container";
import FormSmall from "../FormSmall";
import {
  SectionHeroWrapper,
  SectionHeroContentWrapper,
  SectionHeroColLeft,
  SectionHeroH1,
  SectionHeroQuestionWrapper,
  SectionHeroQuestion,
  SectionHeroContactLink,
  SectionHeroColRight,
  SectionHeroPhoneImg,
} from "./SectionHeroElements";

import Phone from "../../images/home/desktop/illustration-phone-mockup.svg";

const SectionHero = () => {
  return (
    <SectionHeroWrapper>
      <Container>
        <SectionHeroContentWrapper>
          <SectionHeroColLeft>
            <SectionHeroH1>
              Start building with our APIs for absolutely free.
            </SectionHeroH1>
            <FormSmall />
            <SectionHeroQuestionWrapper>
              <SectionHeroQuestion>Have any questions?</SectionHeroQuestion>
              <SectionHeroContactLink to="/contact">
                Contact us
              </SectionHeroContactLink>
            </SectionHeroQuestionWrapper>
          </SectionHeroColLeft>
          <SectionHeroColRight>
            <SectionHeroPhoneImg src={Phone} alt="Phone" />
          </SectionHeroColRight>
        </SectionHeroContentWrapper>
      </Container>
    </SectionHeroWrapper>
  );
};

export default SectionHero;
