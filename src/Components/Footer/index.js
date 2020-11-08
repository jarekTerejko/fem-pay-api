import React from "react";
import { Container } from "../Container";
import LogoLink from "../LogoLink";
import { NavWrapper } from "../Navbar/NavbarElements";
import { NavLinksWrapper } from "../Navbar/NavbarElements";
import { NavLinks } from "../Navbar/NavbarElements";
import { NavItem } from "../Navbar/NavbarElements";
import { NavLinkR } from "../Navbar/NavbarElements";
import {
  FooterElement,
  FooterElementSocialsWrapper,
  FooterElementSocialItem,
  FooterElementSocialLink,
  FooterElementSocialIcon,
} from "./FooterElements";
import Facebook from "../../images/shared/desktop/facebook.svg";
import Twitter from "../../images/shared/desktop/twitter.svg";
import Linkedin from "../../images/shared/desktop/linkedin.svg";

const socialIcons = [Facebook, Twitter, Linkedin];

const Footer = () => {
  return (
    <FooterElement>
      <Container>
        <NavWrapper footerEl="true">
          <LogoLink logoRegular={false} />
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
            <FooterElementSocialsWrapper>
              {socialIcons.map((icon, i) => {
                return (
                  <FooterElementSocialItem key={i}>
                    <FooterElementSocialLink href="#">
                      <FooterElementSocialIcon src={icon} />
                    </FooterElementSocialLink>
                  </FooterElementSocialItem>
                );
              })}
            </FooterElementSocialsWrapper>
          </NavLinksWrapper>
        </NavWrapper>
      </Container>
    </FooterElement>
  );
};

export default Footer;
