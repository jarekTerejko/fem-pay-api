import React from "react";
import { NavTriggerBtn, NavTriggerImg } from "./NavTriggerElements";
import Bars from "../../images/shared/mobile/menu.svg";
import Close from "../../images/shared/mobile/close.svg";

const NavTrigger = ({ isOpen, handleMenuOpen }) => {
  return (
    <NavTriggerBtn>
      <NavTriggerImg src={isOpen ? Close : Bars} onClick={handleMenuOpen} />
    </NavTriggerBtn>
  );
};

export default NavTrigger;
