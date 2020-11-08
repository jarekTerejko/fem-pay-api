import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";

export const FooterElement = styled.footer`
  background: var(--mirage-blue);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: -170px;
    right: -430px;
    z-index: -1;
  }
`;
export const FooterElementSocialsWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const FooterElementSocialItem = styled.li`
  margin: 0 0.5rem;
`;

export const FooterElementSocialLink = styled.a`
  padding: 0.5rem;
`;

export const FooterElementSocialIcon = styled.img``;
