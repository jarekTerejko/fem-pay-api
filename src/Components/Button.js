import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 1.6rem 2.8rem;
  background: var(--dark-pink);
  border: 1px solid var(--dark-pink);
  color: #fff;
  font-family: inherit;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s;

  &:hover {
    background: var(--charm-pink);
    color: var(--link-water-white);
    border-color: var(--charm-pink);
  }
`;
