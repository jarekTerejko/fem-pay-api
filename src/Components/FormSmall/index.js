import React from "react";
import {
  FormSmallWrapper,
  FormSmallInputWrapper,
  FormSmallInput,
  FormSmallButtonSubmit,
} from "./FormSmallElements";

const FormSmall = () => {
  return (
    <FormSmallWrapper>
      <FormSmallInputWrapper>
        <FormSmallInput placeholder="Enter email adress" type="text" />
        <FormSmallButtonSubmit type="submit">
          Schedule a Demo
        </FormSmallButtonSubmit>
      </FormSmallInputWrapper>
    </FormSmallWrapper>
  );
};

export default FormSmall;
