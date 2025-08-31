"use client"
import Image from "next/image";
import {useState} from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Selecte an Option");

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }
  function changeTheTitle(item: string){
    setSelectedOption(item);
    setIsOpen(false);
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="flex border-2  border-black">
        <p className="text-black p-2">{selectedOption}</p>
        <button className=" text-black ml-3 mr-3 cursor-pointer p-2" onClick={toggleDropdown}>&#8595;</button>
      </div>
      <div className="mt-5 border-2 border-black p-3" style={{display: isOpen ? "block" : "none"}}>
        <ul>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("First Item")}><li>first item</li></div>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("Second item")}><li>Second item</li></div>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("Third item")}><li>Third item</li></div>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("Fourth Item")}><li>Fourth item</li></div>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("Fifth Item")}><li>Fifth item</li></div>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("Sixth Item")}><li>Sixth item</li></div>
          <div className="cursor-pointer pb-1 mb-2 mt-2" onClick={() => changeTheTitle("Seventh Item")}><li>Seventh item</li></div>
        </ul>
      </div>
    </div>
  );
}
