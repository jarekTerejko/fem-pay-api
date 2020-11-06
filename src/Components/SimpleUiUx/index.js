import React from "react";
import { Container } from "../Container";
import {
  SectionSimpleUiUx,
  SectionSimpleUiUxWrapper,
  SectionSimpleUiUxColLeft,
  SectionSimpleUiUxH2,
  SectionSimpleUiUxP,
  SectionSimpleUiUxColRight,
  SectionSimpleUiUxImg,
} from "./SimpleUiUxElements";
import photoPhones from "../../images/home/desktop/illustration-simple-ui.svg";

const SimpleUiUx = () => {
  return (
    <SectionSimpleUiUx>
      <Container>
        <SectionSimpleUiUxWrapper>
          <SectionSimpleUiUxColLeft>
            <SectionSimpleUiUxH2>Simple UI & UX</SectionSimpleUiUxH2>
            <SectionSimpleUiUxP>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </SectionSimpleUiUxP>
          </SectionSimpleUiUxColLeft>
          <SectionSimpleUiUxColRight>
            <SectionSimpleUiUxImg src={photoPhones} />
          </SectionSimpleUiUxColRight>
        </SectionSimpleUiUxWrapper>
      </Container>
    </SectionSimpleUiUx>
  );
};

export default SimpleUiUx;
