import { useState } from "react";

function TabButton({ children, onSelect, isSelected }) {
  return (
    <button className={isSelected && "active"} onClick={onSelect}>
      {children}
    </button>
  );
}

export default TabButton;
