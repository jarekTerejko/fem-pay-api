import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";

export const SiteHeaderWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: 0;
    right: 0;
    transform: translateX(150px) translateY(-710px);
    z-index: -1;

    @media screen and (max-width: 1000px) {
      transform: translateX(500px) translateY(-600px);
    }
  }
`;

export const SiteHeaderH1 = styled.h1`
  font-size: 5.4rem;
  max-width: 65rem;
  font-family: "DM Serif Display", serif;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 7rem;

  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
