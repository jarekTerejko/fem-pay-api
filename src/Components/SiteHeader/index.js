import React from "react";
import { Container } from "../Container";
import { ContainerSmall } from "../ContainerSmall";
import { SiteHeaderWrapper, SiteHeaderH1 } from "./SiteHeaderElements";

const SiteHeader = ({ title, about }) => {
  return (
    <SiteHeaderWrapper>
      <Container>
        <ContainerSmall about={about}>
          <SiteHeaderH1>{title}</SiteHeaderH1>
        </ContainerSmall>
      </Container>
    </SiteHeaderWrapper>
  );
};

export default SiteHeader;
