import styled from "styled-components";

export const ArticleQuestion = styled.article`
  padding: 10rem 0;
`;

export const ArticleQuestionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 40px;

  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleQuestionH2 = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 4.6rem;
  font-weight: 400;
  line-height: 0.7;

  @media screen and (max-width: 970px) {
    text-align: center;
    line-height: unset;
  }

  @media screen and (max-width: 500px) {
    font-size: 3.2rem;
  }
`;
