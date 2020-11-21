import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";

export const SectionPartners = styled.section`
  background: var(--mirage-blue);
  position: relative;
  z-index: 0;
  overflow-y: hidden;

  @media screen and (max-width: 970px) {
    padding: 8rem 0;
    overflow-x: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: -350px;
    left: -200px;
    z-index: -1;

    @media screen and (max-width: 780px) {
      left: 0;
      top: 0;
      left: 50%;
      transform: translate(-50%, -520px);
    }
  }
`;

export const SectionPartnersWrapper = styled.div`
  min-height: 472px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionPartnersColLeft = styled.div`
  color: var(--link-water-white);
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 970px) {
    grid-row: 2/3;
    align-items: center;
  }
`;
export const SectionPartnersH2 = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 4.6rem;
  font-weight: 400;
  margin-bottom: 3rem;

  @media screen and (max-width: 970px) {
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    margin-top: 2rem;
    font-size: 3.2rem;
  }
`;
export const SectionPartnersP = styled.p`
  line-height: 1.8;
  max-width: 46rem;
  margin-bottom: 3rem;
  color: var(--light-san-juan-blue);

  @media screen and (max-width: 970px) {
    text-align: center;
  }
`;

export const SectionPartnersBtn = styled.button`
  background: none;
  border: none;
  border: 1px solid var(--link-water-white);
  color: var(--link-water-white);
  padding: 1.5rem 3.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  transition: 0.3s;

  &:hover {
    color: var(--mirage-blue);
    background: var(--link-water-white);
  }
`;

export const SectionPartnersColRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 30px;
  row-gap: 50px;

  @media screen and (max-width: 970px) {
    grid-row: 1/2;
    margin: 0 auto;
    column-gap: 50px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SectionPartnersImg = styled.img`
  &:nth-child(1) {
    align-self: end;
    justify-self: start;

    @media screen and (max-width: 500px) {
      justify-self: center;
      align-self: center;
    }
  }

  &:nth-child(2) {
    align-self: end;
    justify-self: center;

    @media screen and (max-width: 500px) {
      align-self: center;
    }
  }
  &:nth-child(3) {
    align-self: end;
    justify-self: end;

    @media screen and (max-width: 500px) {
      justify-self: center;
      align-self: center;
    }
  }
  &:nth-child(4) {
    align-self: start;
    justify-self: start;

    @media screen and (max-width: 500px) {
      justify-self: center;
      align-self: center;
    }
  }
  &:nth-child(5) {
    align-self: start;
    justify-self: center;

    @media screen and (max-width: 500px) {
      align-self: center;
    }
  }
  &:nth-child(6) {
    align-self: start;
    justify-self: end;

    @media screen and (max-width: 500px) {
      justify-self: center;
      align-self: center;
    }
  }
`;
