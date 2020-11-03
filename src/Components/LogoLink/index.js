import React from "react";
import { LogoImg, LogoLinkContainer } from "./LogoLinkElements";
import LogoImage from "../../images/shared/desktop/logo.svg";
import LogoImageWhite from "../../images/shared/desktop/logo--white.svg";

const LogoLink = ({ logoRegular }) => {
  return (
    <>
      <LogoLinkContainer to="/">
        <LogoImg src={logoRegular ? LogoImage : LogoImageWhite} />
      </LogoLinkContainer>
    </>
  );
};

export default LogoLink;
