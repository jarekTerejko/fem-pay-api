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

    @media screen and (max-width: 710px) {
      top: 0;
      right: 0;
      left: 50%;
      transform: translate(-50%, 150px);
    }
  }
`;

export const FooterElementNavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

export const FooterElementNavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 6rem;
  align-items: center;

  @media screen and (max-width: 710px) {
    margin-left: 0;
    flex-direction: column;
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
