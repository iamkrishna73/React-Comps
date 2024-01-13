import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderList = items.map((item, index) => {
    console.log(index);
    const isExpanded = index === expandedIndex;
    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default Accordian;
