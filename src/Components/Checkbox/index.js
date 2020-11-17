import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./CheckboxElements";

const Checkbox = ({
  className,
  checked,
  onChange,
  handleCheckboxChange,
  ...props
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox
      checked={checked}
      onChange={handleCheckboxChange}
      {...props}
    />
    <StyledCheckbox checked={checked} onClick={handleCheckboxChange}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
