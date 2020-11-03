import React, { useState } from "react";
import { NavTriggerBtn, NavTriggerImg } from "./NavTriggerElements";
import Bars from "../../images/shared/mobile/menu.svg";
import Close from "../../images/shared/mobile/close.svg";

const NavTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavTriggerBtn>
      <NavTriggerImg src={isOpen ? Close : Bars} />
    </NavTriggerBtn>
  );
};

export default NavTrigger;
