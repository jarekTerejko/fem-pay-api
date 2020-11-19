import React from "react";
import FormBig from "../FormBig";
import {
  ContactMainWrapper,
  ContactMainColLeft,
  ContactMainCols,
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
          <SectionPartnersColRight>
            {partnersDark.map((partner, i) => {
              return <SectionPartnersImg src={partner} key={i} />;
            })}
          </SectionPartnersColRight>
        </ContactMainCols>
      </Container>
    </ContactMainWrapper>
  );
};

export default ContactMain;
