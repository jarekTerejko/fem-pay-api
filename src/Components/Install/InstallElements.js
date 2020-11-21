import styled from "styled-components";

export const SectionInstall = styled.section``;

export const SectionInstallWrapper = styled.div`
  padding-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionInstallColLeft = styled.div`
  @media screen and (max-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionInstallImg = styled.img`
  transform: scale(1.2);

  @media screen and (max-width: 970px) {
    transform: scale(1);
    margin-left: 4rem;
  }
`;
export const SectionInstallColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SectionInstallH2 = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 4.6rem;
  font-weight: 400;
  margin-bottom: 3rem;
  margin-top: -7rem;

  @media screen and (max-width: 970px) {
    margin-top: -4rem;
    font-size: 3.2rem;
  }
`;

export const SectionInstallP = styled.p`
  color: var(--light-san-juan-blue);
  max-width: 44rem;
  line-height: 1.8;

  @media screen and (max-width: 970px) {
    max-width: 56rem;
  }
`;
