import React, { useState } from "react";
import {
  FormSmallWrapper,
  FormSmallInputWrapper,
  FormSmallInput,
  FormSmallSuccessMsg,
  FormSmallErrorMsg,
  FormSmallButtonSubmit,
} from "./FormSmallElements";

const FormSmall = () => {
  const [mailValue, setMailValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleOnChangeInput = (e) => {
    if (submitted) {
      setSubmitted(false);
    }
    setMailValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (valid) {
      setValid(false);
    }

    if (isMailValid(mailValue)) {
      setValid(true);
    }
  };

  const isMailValid = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  return (
    <FormSmallWrapper onSubmit={handleSubmit}>
      <FormSmallInputWrapper>
        <FormSmallInput
          placeholder="Enter email adress"
          type="text"
          value={mailValue}
          name="mail"
          onChange={handleOnChangeInput}
        />
        {submitted && valid && (
          <FormSmallSuccessMsg>Thank you for submitting!</FormSmallSuccessMsg>
        )}
        {submitted && !mailValue && (
          <FormSmallErrorMsg>This field can't be empty</FormSmallErrorMsg>
        )}
        {submitted && mailValue && !valid && (
          <FormSmallErrorMsg>
            Please use a valid email address
          </FormSmallErrorMsg>
        )}
        <FormSmallButtonSubmit type="submit">
          Schedule a Demo
        </FormSmallButtonSubmit>
      </FormSmallInputWrapper>
    </FormSmallWrapper>
  );
};

export default FormSmall;
