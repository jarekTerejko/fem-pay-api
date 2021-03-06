import styled from "styled-components";

export const FormSmallWrapper = styled.form`
  font-family: inherit;
  max-width: 44rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1165px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
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

export const FormSmallSuccessMsg = styled.span`
  display: block;
  position: absolute;
  left: 30px;
  bottom: -22px;
  color: var(--succes-msg-color);
`;
export const FormSmallErrorMsg = styled.span`
  display: block;
  position: absolute;
  left: 30px;
  bottom: -22px;
  color: var(--charm-pink);
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

  @media screen and (max-width: 440px) {
    width: 100%;
    top: 80px;
  }

  &:hover {
    background: var(--charm-pink);
    border-color: var(--charm-pink);
  }
`;
