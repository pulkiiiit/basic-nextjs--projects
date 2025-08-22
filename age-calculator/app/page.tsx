"use client";
import { useState } from "react";
import {DateTime} from "luxon";

export default function Home() {

  const [dob ,setDob] = useState("");
  const [age, setAge] = useState<string | null>(null);

  const handleCalcualte = (e: React.FormEvent) => {
    e.preventDefault();
    if(!dob){
      setAge("Please enter a valid date");
      return;
    } 
      
    const birthdate = DateTime.fromISO(dob);
    const now = DateTime.now();

    if(birthdate > now){
      setAge("Birthdate cannot be in the future");
      return;
    }
    const diff = now.diff(birthdate, ["years", "months", "days"]).toObject();
    const years = Math.floor(diff.years || 0);
    const months = Math.floor(diff.months || 0);
    const days = Math.floor(diff.days || 0);
    setAge(`${years} years, ${months} months, ${days} days`);
  }

  return (
    <div className=" flex flex-col  items-center justify-center h-screen">
      <div className="text-2xl font-bold mb-2">Age Calculator</div>
      <form action="" className=" flex flex-col  items-center justify-center ">
        <p className="mb-2">Enter your birthdate</p>
        <input type="date" className="border p-2 rounded mb-4" value={dob} onChange={(e) => setDob(e.target.value)} />
        <div className=" flex flex-row gap-3  items-center justify-center ">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl" onClick={handleCalcualte}>Calculate</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl">Refresh</button>
        </div>
      </form>

      <div className="mt-4 text-lg">
        <p>age: <b>{age}</b></p>
      </div>

      
    </div>
  );
}
