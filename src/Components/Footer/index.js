import React from "react";
import { Container } from "../Container";
import LogoLink from "../LogoLink";
import { NavWrapper } from "../Navbar/NavbarElements";
import { NavItem } from "../Navbar/NavbarElements";
import { NavLinkR } from "../Navbar/NavbarElements";
import {
  FooterElement,
  FooterElementSocialsWrapper,
  FooterElementSocialItem,
  FooterElementSocialLink,
  FooterElementSocialIcon,
  FooterElementNavLinksWrapper,
  FooterElementNavLinks,
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
          <FooterElementNavLinksWrapper>
            <FooterElementNavLinks>
              <NavItem>
                <NavLinkR to="/pricing" footerel="true">
                  pricing
                </NavLinkR>
              </NavItem>
              <NavItem>
                <NavLinkR to="/about" footerel="true">
                  about
                </NavLinkR>
              </NavItem>
              <NavItem footerEl="true">
                <NavLinkR to="/contact" footerel="true">
                  contact
                </NavLinkR>
              </NavItem>
            </FooterElementNavLinks>
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
          </FooterElementNavLinksWrapper>
        </NavWrapper>
      </Container>
    </FooterElement>
  );
};

export default Footer;
