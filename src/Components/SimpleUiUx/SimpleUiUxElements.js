import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";

export const SectionSimpleUiUx = styled.section`
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: 0;
    right: -390px;
  }
`;

export const SectionSimpleUiUxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-height: 78rem;
`;

export const SectionSimpleUiUxColLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionSimpleUiUxH2 = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 4.6rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const SectionSimpleUiUxP = styled.p`
  color: var(--light-san-juan-blue);
  max-width: 44rem;
  line-height: 1.8;
`;

export const SectionSimpleUiUxColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionSimpleUiUxImg = styled.img`
  transform: scale(1.2) translateX(20px);
`;
