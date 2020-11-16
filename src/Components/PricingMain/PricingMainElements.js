import styled from "styled-components";

export const PricingWrapper = styled.main``;

export const PricingCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;
export const PricingCol = styled.div``;
export const PricingColTitle = styled.h3`
  font-size: 3rem;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--dark-pink);
`;
export const PricingColDescription = styled.p`
  color: var(--light-san-juan-blue);
  line-height: 1.6;
  margin-bottom: 2rem;
`;
export const PricingColPrice = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 4.6rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;
export const PricingColFeatures = styled.ul`
  list-style: none;
  padding: 1.5rem 0;
  border: 1px solid hsl(207deg 17% 69% / 30%);
  border-left-color: transparent;
  border-right-color: transparent;
`;
export const PricingColFeature = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr;
  margin-bottom: 1rem;
`;
export const PricingColIcon = styled.img`
  &.invisible {
    visibility: hidden;
  }
`;
export const PricingColFeatureName = styled.span`
  &.disabled {
    color: var(--light-san-juan-blue);
  }
`;
export const PricingColLink = styled.a`
  margin: 3rem 0;
  padding: 1.5rem 3rem;

  border-radius: 30px;
  border: 1px solid var(--light-san-juan-blue);
  background: none;
  font-family: "Public Sans", sans-serif;
  font-weight: 700;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    background: var(--dark-pink);
    color: var(--link-water-white);
    border-color: var(--dark-pink);
  }
`;
