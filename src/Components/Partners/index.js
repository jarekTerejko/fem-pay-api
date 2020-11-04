import React from "react";
import { Container } from "../Container";
import {
  SectionPartners,
  SectionPartnersWrapper,
  SectionPartnersColLeft,
  SectionPartnersH2,
  SectionPartnersP,
  SectionPartnersColRight,
  SectionPartnersBtn,
  SectionPartnersImg,
} from "./PartnersElements";
import { partnersWhite } from "../../images/shared";

const Partners = () => {
  return (
    <SectionPartners>
      <Container>
        <SectionPartnersWrapper>
          <SectionPartnersColLeft>
            <SectionPartnersH2>Who we work with</SectionPartnersH2>
            <SectionPartnersP>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </SectionPartnersP>
            <SectionPartnersBtn>About us</SectionPartnersBtn>
          </SectionPartnersColLeft>
          <SectionPartnersColRight>
            {partnersWhite.map((partner, i) => {
              return <SectionPartnersImg src={partner} key={i} />;
            })}
          </SectionPartnersColRight>
        </SectionPartnersWrapper>
      </Container>
    </SectionPartners>
  );
};

export default Partners;
