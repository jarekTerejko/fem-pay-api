import { Link } from "react-router-dom";
import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";

export const SectionHeroWrapper = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: -270px;
    right: -140px;
    z-index: -1;
  }
`;

export const SectionHeroContentWrapper = styled.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const SectionHeroColLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionHeroH1 = styled.h1`
  font-size: 7rem;
  font-family: "DM Serif Display", serif;
  line-height: 1;
  margin-bottom: 6rem;
  margin-top: -3rem;
`;

export const SectionHeroQuestionWrapper = styled.div`
  display: flex;
`;

export const SectionHeroQuestion = styled.span`
  margin-left: 3rem;
  color: var(--light-san-juan-blue);
`;

export const SectionHeroContactLink = styled(Link)`
  color: var(--light-san-juan-blue);
  font-weight: 700;
  padding-left: 1rem;
`;
export const SectionHeroColRight = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionHeroPhoneImg = styled.img`
  display: block;
  max-width: 100%;
  margin-left: auto;
`;
