import styled from "styled-components";

export const SectionFeatures = styled.section``;
export const SectionFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;
export const SectionFeaturesCol = styled.div`
  text-align: center;
`;

export const SectionFeaturesImg = styled.img`
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionFeaturesTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

export const SectionFeaturesP = styled.p`
  line-height: 1.6;
  color: var(--light-san-juan-blue);
`;
