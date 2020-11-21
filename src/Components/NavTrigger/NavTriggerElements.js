import styled from "styled-components";

export const NavTriggerBtn = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 710px) {
    display: flex;
    z-index: 2;
    position: fixed;
    right: 2rem;
  } ;
`;

export const NavTriggerImg = styled.img`
  display: block;
  width: 100%;
`;
