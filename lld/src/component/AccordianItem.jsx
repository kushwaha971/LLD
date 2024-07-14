import React from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
 
  return (
    <div className="p-2 border-black">
      <div
        className="font-bold bg-slate-500 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
      </div>
      {isOpen && <div className="text-blue-700">{body}</div>}
    </div>
  );
};

export default AccordianItem;
