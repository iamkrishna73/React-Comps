import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //CLOSE DROPDOWN
    setIsOpen(false);
    //WHAT OPTION DID THE USER CLICK ON???
    onChange(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (value) {
    content = value.label;
  }
  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white v-full"
        onClick={handleClick}
      >
        {content}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderOptions}
        </div>
      )}
    </div>
  );
};

export default DropDown;
