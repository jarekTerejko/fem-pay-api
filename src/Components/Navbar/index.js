import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import NavTriggerBtn from "../NavTrigger";
import {
  NavbarContainer,
  NavWrapper,
  NavLinksWrapper,
  NavItem,
  NavLinks,
  NavLinkR,
} from "./NavbarElements";
import LogoLink from "../LogoLink";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <NavWrapper>
          <LogoLink logoRegular={true} />
          <NavLinksWrapper>
            <NavLinks>
              <NavItem>
                <NavLinkR to="/pricing">pricing</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/about">about</NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/contact">contact</NavLinkR>
              </NavItem>
            </NavLinks>
            <Button to="/pricing">Schedule a Demo</Button>
          </NavLinksWrapper>
          <NavTriggerBtn />
        </NavWrapper>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
