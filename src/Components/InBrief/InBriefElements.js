import styled from "styled-components";

export const InBriefWrapper = styled.section`
  margin-bottom: 7rem;
`;

export const InBriefCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
export const InBriefCol = styled.div`
  padding: 2rem 0;
  border: 1px solid hsl(207deg 17% 69% / 30%);
  border-left-color: transparent;
  border-right-color: transparent;
`;

export const InBriefTitle = styled.h4`
  color: var(--light-san-juan-blue);
  margin-bottom: 1.4rem;
  font-size: 1.8rem;
`;

export const InBriefNumber = styled.span`
  display: inline-block;
  font-size: 5.4rem;
  font-family: "DM Serif Display", serif;
  color: var(--dark-pink);
`;
