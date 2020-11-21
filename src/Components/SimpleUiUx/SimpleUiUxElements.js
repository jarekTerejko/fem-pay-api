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

    @media screen and (max-width: 970px) {
      display: none;
    }
  }
`;

export const SectionSimpleUiUxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-height: 78rem;

  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr;
    padding: 10rem 0;

    @media screen and (max-width: 500px) {
      min-height: unset;
    }
  }
`;

export const SectionSimpleUiUxColLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 970px) {
    grid-row: 2/3;
    align-items: center;
    text-align: center;
  }
`;

export const SectionSimpleUiUxH2 = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 4.6rem;
  font-weight: 400;
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    font-size: 3.2rem;
  }
`;

export const SectionSimpleUiUxP = styled.p`
  color: var(--light-san-juan-blue);
  max-width: 44rem;
  line-height: 1.8;

  @media screen and (max-width: 970px) {
    max-width: 56rem;
  }
`;

export const SectionSimpleUiUxColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 970px) {
    grid-gap: 1/2;
    align-items: center;
  }
`;

export const SectionSimpleUiUxImg = styled.img`
  transform: scale(1.2) translateX(20px);

  @media screen and (max-width: 970px) {
    transform: scale(1) translateX(10px);
  }
`;
