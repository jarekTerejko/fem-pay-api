import React from "react";
import { Container } from "../Container";
import { ContainerSmall } from "../ContainerSmall";
import {
  DescriptionColsWrapper,
  DescriptionColsInnerWrapper,
  DescriptionColsColLeft,
  DescriptionColsH3,
  DescriptionColsColRight,
  DescriptionColsText,
} from "./DecsriptionColsElements";

const DescriptionCols = ({ about, data }) => {
  return (
    <DescriptionColsWrapper>
      <Container>
        <ContainerSmall about={about}>
          <DescriptionColsInnerWrapper>
            {data.map((item, i) => {
              return (
                <>
                  <DescriptionColsColLeft>
                    <DescriptionColsH3>{item.title}</DescriptionColsH3>
                  </DescriptionColsColLeft>
                  <DescriptionColsColRight>
                    <DescriptionColsText>{item.text}</DescriptionColsText>
                  </DescriptionColsColRight>
                </>
              );
            })}
          </DescriptionColsInnerWrapper>
        </ContainerSmall>
      </Container>
    </DescriptionColsWrapper>
  );
};

export default DescriptionCols;
