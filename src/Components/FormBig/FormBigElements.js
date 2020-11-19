import styled from "styled-components";

export const FormBigWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 1000px) {
    max-width: 64rem;
    margin: 0 auto;
  }
`;

export const FormBigInput = styled.input`
  border: none;
  border-bottom: 1px solid hsl(207deg 17% 69% / 30%);
  padding: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  background: none;
  color: var(--light-san-juan-blue);
  font-family: "Public Sans", sans-serif;
  font-size: 1.5rem;
`;

export const FormBigInputErrMsg = styled.span`
  display: block;
  color: var(--dark-pink);
  margin-left: 1.5rem;
  font-size: 1.2rem;
`;
export const FormBigInputSuccessMsg = styled.span`
  display: block;
  color: var(--succes-msg-color);
`;

export const FormBigTextareaLabel = styled.label`
  font-family: "Public Sans", sans-serif;
  color: var(--light-san-juan-blue);
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
`;

export const FormBigTextMsg = styled.textarea`
  border: none;
  border-bottom: 1px solid hsl(207deg 17% 69% / 30%);
  padding: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  background: none;
  color: var(--light-san-juan-blue);
  font-family: "Public Sans", sans-serif;
`;

export const FormBigCheckboxLabel = styled.label`
  font-family: "Public Sans", sans-serif;
  margin: 1rem 0 0.5rem 0;
  display: flex;
  align-items: center;
`;
export const FormBigSpanLabel = styled.span`
  margin-left: 2rem;
`;

export const FormBigSubmitBtn = styled.button`
  margin: 2rem 0 1rem;
  padding: 1.5rem;
  width: 20rem;
  border-radius: 30px;
  border: 1px solid var(--light-san-juan-blue);
  background: none;
  font-family: "Public Sans", sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: var(--dark-pink);
    color: var(--link-water-white);
    border-color: var(--dark-pink);
  }
`;
