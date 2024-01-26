import React, { useState } from "react";
import Panel from "./Panel";
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
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
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
    <div className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer '
        onClick={handleClick}
      >
        {content}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full border'>{renderOptions}</Panel>
      )}
    </div>
  );
};

export default DropDown;
