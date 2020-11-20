import styled from "styled-components";

export const ContactMainWrapper = styled.main``;

export const ContactMainCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  } ;
`;

export const ContactMainColLeft = styled.div`
  @media screen and (max-width: 1000px) {
    grid-row: 1/2;
    & + div {
      grid-row: 2/3;
    }
  }
`;

export const ContactMainColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ContactMainParnersIntro = styled.h4`
  font-family: "DM Serif Display", serif;
  font-size: 2.4rem;
  font-weight: 400;
  max-width: 44rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  } ;
`;
