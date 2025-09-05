"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";
import { languages } from "@/lib/languaes";

export default function Home() {
  const [language, setLanguage] = useState<string | null>("Select language");
  const [isopen, setIsOpen] = useState(false);
  const [displaymessage, setDisplayMessage] = useState("Please select a language");

  function changeTheTitle(selectedLanguage: string) {
    setLanguage(selectedLanguage);
    setIsOpen(false);
    setDisplayMessage(`Fetching random repo for  ${selectedLanguage}`);
  }
  function toggledropdown() {
    setIsOpen(!isopen);
    setDisplayMessage("Please select a language");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold ">Random github repositary</h1>
      <p className="mt-10">Select a random repo</p>
      <div className="flex items-center mt-10 border-2 border-white rounded-md p-2">
        <button className="p-2 cursor-pointer" onClick={toggledropdown}>{language}</button>
        <ChevronDown className=" cursor-pointer w-5 h-5"/>
      </div>
      <div className="mt-5 border-2 border-white rounded-md p-2" style={{ display: isopen ? "block" : "none" }}>
        {languages.map((l) => (
          <div className=" mt-2 border-2 border-white rounded-md p-2">
            <ul>
              <li> <button className="w-full h-full" onClick={() => changeTheTitle(l)}>{l}</button></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-amber-50 text-amber-950 p-10 rounded-md">
        {displaymessage}
      </div>
    </div>
  );
}
