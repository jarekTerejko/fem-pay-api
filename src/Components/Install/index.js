import React from "react";
import { Container } from "../Container";
import {
  SectionInstall,
  SectionInstallWrapper,
  SectionInstallColLeft,
  SectionInstallColRight,
  SectionInstallImg,
  SectionInstallH2,
  SectionInstallP,
} from "./InstallElements";
import PhotoInstall from '../../images/home/desktop/illustration-easy-to-implement.svg'

const Install = () => {
  return (
    <SectionInstall>
      <Container>
        <SectionInstallWrapper>
          <SectionInstallColLeft>
            <SectionInstallImg src={PhotoInstall} />
          </SectionInstallColLeft>
          <SectionInstallColRight>
            <SectionInstallH2>Easy to implement</SectionInstallH2>
            <SectionInstallP>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </SectionInstallP>
          </SectionInstallColRight>
        </SectionInstallWrapper>
      </Container>
    </SectionInstall>
  );
};

export default Install;
