import styled from "styled-components";

export const FormSmallWrapper = styled.form`
  font-family: inherit;
  max-width: 44rem;
  margin-bottom: 3rem;
`;

export const FormSmallInputWrapper = styled.div`
  position: relative;
`;

export const FormSmallInput = styled.input`
  width: calc(100% - 6rem);
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1.6rem 3rem;
  border-radius: 30px;
  color: var(--light-san-juan-blue);
  font-family: inherit;
  font-size: 1.5rem;

  &::placeholder {
    font-weight: 700;
  }
`;

export const FormSmallButtonSubmit = styled.button`
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
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background: #fff;
    color: var(--dark-pink);
  }
`;
