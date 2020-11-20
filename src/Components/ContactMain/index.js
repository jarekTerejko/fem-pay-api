import React from "react";
import FormBig from "../FormBig";
import {
  ContactMainWrapper,
  ContactMainColLeft,
  ContactMainCols,
  ContactMainColRight,
  ContactMainParnersIntro,
} from "./ContactMainElements";
import {
  SectionPartnersColRight,
  SectionPartnersImg,
} from "../Partners/PartnersElements";
import { Container } from "../Container";
import { partnersDark } from "../../images/shared";

const ContactMain = () => {
  return (
    <ContactMainWrapper>
      <Container>
        <ContactMainCols>
          <ContactMainColLeft>
            <FormBig />
          </ContactMainColLeft>
          <ContactMainColRight>
            <ContactMainParnersIntro>
              Join the thousands of innovators already building with us
            </ContactMainParnersIntro>
            <SectionPartnersColRight>
              {partnersDark.map((partner, i) => {
                return <SectionPartnersImg src={partner} key={i} />;
              })}
            </SectionPartnersColRight>
          </ContactMainColRight>
        </ContactMainCols>
      </Container>
    </ContactMainWrapper>
  );
};

export default ContactMain;
