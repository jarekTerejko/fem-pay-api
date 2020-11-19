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
