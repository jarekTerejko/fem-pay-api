import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: relative;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.5rem 0;
  padding: ${({ footerEl }) => (footerEl ? "3rem 0" : "4.5rem 0")};
  align-items: center;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 6rem;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
`;

export const NavLinkR = styled(NavLinkRouter)`
  text-decoration: none;
  color: ${({ dark }) =>
    dark ? "var(--san-juan-blue)" : "var(--link-water-white)"};
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 500;
  padding: 1rem;
`;
