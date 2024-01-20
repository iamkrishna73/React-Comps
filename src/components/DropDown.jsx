import React, { useState } from "react";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    //console.log(option.value);
    onChange(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (value) {
    content = value.label;
  }
  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
};

export default DropDown;
