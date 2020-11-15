import React, { useState } from "react";
import Checkbox from "../Checkbox";
import {
  FormBigWrapper,
  FormBigTextMsg,
  FormBigCheckboxLabel,
  FormBigInput,
  FormBigSubmitBtn,
  FormBigInputErrMsg,
  FormBigTextareaLabel,
  FormBigInputSuccessMsg,
  FormBigSpanLabel,
} from "./FormBigElements";

const FormBig = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [values, setValues] = useState({
    nameValue: "",
    email: "",
    companyName: "",
    title: "",
    textareaValue: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isValid) {
      setIsValid(false);
    }

    if (isMailValid(values.email)) {
      setIsValid(true);
    }
  };

  const isMailValid = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleNameChange = (target, e) => {
    setValues({ ...values, nameValue: e.target.value });
  };
  const handleEmailChange = (target, e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handleCompanyNameChange = (target, e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target);
  };
  const handleTitleChange = (target, e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  const handleInputChange = (target, e) => {
    if (isSubmitted) {
      setIsSubmitted(false);
    }
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  const handleCheckboxChange = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
    }
    setIsChecked(!isChecked);
  };

  return (
    <FormBigWrapper onSubmit={handleSubmit}>
      <FormBigInput
        type="text"
        name="nameValue"
        placeholder="Name"
        value={values.nameValue}
        onChange={(e) => handleInputChange(e.target, e)}
      />
      {isSubmitted && !values.nameValue && (
        <FormBigInputErrMsg>This field can't be empty</FormBigInputErrMsg>
      )}
      <FormBigInput
        type="text"
        name="email"
        placeholder="Email Address"
        value={values.email}
        // onChange={(e) => handleEmailChange(e.target, e)}
        onChange={(e) => handleInputChange(e.target, e)}
      />
      {isSubmitted && !values.email && (
        <FormBigInputErrMsg>This field can't be empty</FormBigInputErrMsg>
      )}
      {isSubmitted && values.email && !isValid && (
        <FormBigInputErrMsg>
          Please use a valid email address
        </FormBigInputErrMsg>
      )}
      <FormBigInput
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={values.companyName}
        onChange={(e) => handleInputChange(e.target, e)}
      />
      {isSubmitted && !values.companyName && (
        <FormBigInputErrMsg>This field can't be empty</FormBigInputErrMsg>
      )}
      <FormBigInput
        type="text"
        name="title"
        placeholder="Title"
        value={values.title}
        onChange={(e) => handleInputChange(e.target, e)}
      />
      {isSubmitted && !values.title && (
        <FormBigInputErrMsg>This field can't be empty</FormBigInputErrMsg>
      )}
      <FormBigTextareaLabel htmlFor="textareaValue">
        Message
      </FormBigTextareaLabel>
      <FormBigTextMsg
        value={values.textareaValue}
        onChange={(e) => handleInputChange(e.target, e)}
        name="textareaValue"
      />

      {isSubmitted && !values.textareaValue && (
        <FormBigInputErrMsg>This field can't be empty</FormBigInputErrMsg>
      )}
      <FormBigCheckboxLabel htmlFor="up-to-date">
        <Checkbox
          name="up-to-date"
          type="checkbox"
          checked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
        <FormBigSpanLabel>
          Stay up-to-date with company announcements and updates to our API
        </FormBigSpanLabel>
      </FormBigCheckboxLabel>
      {isSubmitted && !isChecked && (
        <FormBigInputErrMsg>Check it</FormBigInputErrMsg>
      )}
      <FormBigSubmitBtn type="submit">Submit</FormBigSubmitBtn>
      {isSubmitted &&
        isChecked &&
        isValid &&
        values.nameValue &&
        values.companyName &&
        values.title &&
        values.textareaValue && (
          <FormBigInputSuccessMsg>
            Thank you for submitting!
          </FormBigInputSuccessMsg>
        )}
    </FormBigWrapper>
  );
};

export default FormBig;
