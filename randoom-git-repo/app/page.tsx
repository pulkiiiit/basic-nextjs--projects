"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<string | null>("Select language");
  const [isopen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold ">Random github repositary</h1>
      <p className="mt-10">Select a random repo</p>
      <div className="flex items-center mt-10 border-2 border-white rounded-md p-2">
        <button className="p-2 cursor-pointer">{language}</button>
        <ChevronDown className=" cursor-pointer w-5 h-5"/>
      </div>
    </div>
  );
}
