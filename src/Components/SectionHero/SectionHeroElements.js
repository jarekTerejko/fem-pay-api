import { Link } from "react-router-dom";
import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";

export const SectionHeroWrapper = styled.section`
  position: relative;

  @media screen and (max-width: 780px) {
    padding-bottom: 9rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: -270px;
    right: -140px;
    z-index: -1;

    @media screen and (max-width: 780px) {
      top: 0;
      right: unset;
      left: 50%;
      transform: translate(-50%, -500px);
    }

    @media screen and (max-width: 400px) {
      transform: translate(-50%, -600px);
    }
  }
`;

export const SectionHeroContentWrapper = styled.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;
export const SectionHeroColLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 780px) {
    grid-row: 2/3;
  }
`;

export const SectionHeroH1 = styled.h1`
  font-size: 7rem;
  font-family: "DM Serif Display", serif;
  line-height: 1;
  margin-bottom: 6rem;
  margin-top: -3rem;

  @media screen and (max-width: 1165px) {
    font-size: 6rem;
    text-align: center;
  }
  
  @media screen and (max-width: 780px) {
    max-width: 70rem;
    margin-top: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 3.2rem;
  }
`;

export const SectionHeroQuestionWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1165px) {
    justify-content: center;
  }

  @media screen and (max-width: 440px) {
    margin-top: 8rem;
  }
`;

export const SectionHeroQuestion = styled.span`
  margin-left: 3rem;
  color: var(--light-san-juan-blue);

  @media screen and (max-width: 1165px) {
    margin-left: 0;
  }
`;

export const SectionHeroContactLink = styled(Link)`
  color: var(--light-san-juan-blue);
  font-weight: 700;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    bottom: -1px;
    height: 2px;
    width: calc(100% - 10px);
    background: var(--light-san-juan-blue);
  }
`;
export const SectionHeroColRight = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 780px) {
    grid-row: 1/2;
    justify-content: center;
  }
`;

export const SectionHeroPhoneImg = styled.img`
  display: block;
  max-width: 100%;
  margin-left: auto;

  @media screen and (max-width: 780px) {
    margin-left: 4.5rem;
  }
`;
