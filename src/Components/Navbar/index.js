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

const Navbar = ({ isOpen, handleMenuOpen }) => {
  return (
    <NavbarContainer>
      <Container>
        <NavWrapper>
          <LogoLink
            logoRegular={true}
            handleMenuOpen={handleMenuOpen}
            isOpen={isOpen}
          />
          <NavLinksWrapper isOpen={isOpen}>
            <NavLinks>
              <NavItem>
                <NavLinkR onClick={handleMenuOpen} dark="true" to="/pricing">
                  pricing
                </NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR onClick={handleMenuOpen} dark="true" to="/about">
                  about
                </NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR onClick={handleMenuOpen} dark="true" to="/contact">
                  contact
                </NavLinkR>
              </NavItem>
            </NavLinks>
            <Button to="#" onClick={handleMenuOpen}>
              Schedule a Demo
            </Button>
          </NavLinksWrapper>
          <NavTriggerBtn handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
        </NavWrapper>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
