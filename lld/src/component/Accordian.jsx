import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    title: "Item 1",
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo,
      eligendi quos rerum consectetur maxime eum neque odit repellat cupiditate
      labore? Totam odit incidunt ipsum quisquam deserunt dolor molestias
      quidem.`,
  },
  {
    title: "Item 2",
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo,
      eligendi quos rerum consectetur maxime eum neque odit repellat cupiditate
      labore? Totam odit incidunt ipsum quisquam deserunt dolor molestias
      quidem.`,
  },
  {
    title: "Item 3",
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo,
      eligendi quos rerum consectetur maxime eum neque odit repellat cupiditate
      labore? Totam odit incidunt ipsum quisquam deserunt dolor molestias
      quidem.`,
  },
  {
    title: "Item 3",
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo,
      eligendi quos rerum consectetur maxime eum neque odit repellat cupiditate
      labore? Totam odit incidunt ipsum quisquam deserunt dolor molestias
      quidem.`,
  },
];

const Accordian = () => {
  const [isOpenIndex, setIsOpenIndex] = useState([]);
  const handleToggle = (index) =>{
    
    setIsOpenIndex((preIndex) =>{
        if(preIndex.includes(index)){
            return preIndex.filter((i) => i!==index)
        }
        else{
            return [...preIndex, index]
        }
    })
  }
  return (
    <div className="w-[50%] m-auto mt-10">
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={isOpenIndex.includes(index)}
          setIsOpen={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordian;
