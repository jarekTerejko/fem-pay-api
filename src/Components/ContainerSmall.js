import styled from "styled-components";

export const ContainerSmall = styled.div`
  max-width: ${({ about }) => (about ? "97rem" : "100%")};
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    padding: 0 2rem;
  }
`;
