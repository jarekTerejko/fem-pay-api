import styled from "styled-components";

export const DescriptionColsWrapper = styled.div``;
export const DescriptionColsInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

export const DescriptionColsColLeft = styled.div`
  grid-column: 1/3;
`;

export const DescriptionColsH3 = styled.h3`
  font-size: 3rem;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
`;

export const DescriptionColsColRight = styled.div`
  grid-column: 3/7;
`;

export const DescriptionColsText = styled.p`
  color: var(--light-san-juan-blue);
  line-height: 1.8;
`;
