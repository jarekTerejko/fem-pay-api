import styled from "styled-components";

export const DescriptionColsWrapper = styled.div``;
export const DescriptionColsInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  @media screen and (max-width: 710px) {
    display: block;
    text-align: center;
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export const DescriptionColsColLeft = styled.div`
  grid-column: 1/3;
`;

export const DescriptionColsH3 = styled.h3`
  font-size: 3rem;
  font-family: "DM Serif Display", serif;
  font-weight: 400;

  @media screen and (max-width: 710px) {
    margin-bottom: 2rem;
  }
`;

export const DescriptionColsColRight = styled.div`
  grid-column: 3/7;
`;

export const DescriptionColsText = styled.p`
  color: var(--light-san-juan-blue);
  line-height: 1.8;
  margin-bottom: 2rem;
`;
