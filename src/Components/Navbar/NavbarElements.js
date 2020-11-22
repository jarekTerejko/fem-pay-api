import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: relative;
  padding: 4.5rem 0;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ footerEl }) => (footerEl ? "2rem 0" : "0")};

  @media screen and (max-width: 710px) {
    flex-direction: column;
    flex-direction: ${({ footerEl }) => (footerEl ? "column" : "row")};
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  transition: 0.3s transform;

  @media screen and (max-width: 710px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    height: 100vh;
    background: var(--mirage-blue);
    z-index: 2;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 6rem;
  align-items: center;

  @media screen and (max-width: 710px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 10rem;
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  @media screen and (max-width: 710px) {
    margin: 1rem;
    margin: ${({ footerEl }) => (footerEl ? ".5rem" : "1rem")};

    &:last-child {
      margin-bottom: 3rem;
    }
  }
`;

export const NavLinkR = styled(NavLinkRouter)`
  text-decoration: none;
  color: ${({ dark }) =>
    dark ? "var(--san-juan-blue)" : "var(--link-water-white)"};
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 500;
  padding: 1rem;

  @media screen and (max-width: 710px) {
    color: var(--link-water-white);
    font-size: ${({ footerel }) => (footerel ? "1.3rem" : "1.8rem")};
  }
`;
