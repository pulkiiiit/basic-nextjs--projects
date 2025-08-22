"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const flashcards = [{quesiton: "What is JavaScript?", answer: "JavaScript is a programming language used to make web pages interactive. It runs in the browser and can also be used on the server (with Node.js)."},{quesiton: "Is JavaScript the same as Java?", answer: "No. JavaScript is a scripting language mainly for web development, while Java is a general-purpose programming language."},{quesiton: "What are the main data types in JavaScript?", answer: "String, Number, Boolean, Null, Undefined, Symbol, and BigInt."},{quesiton: "What is the difference between null and undefined?", answer: "null represents an intentional absence of value, while undefined means a variable has been declared but not assigned a value."},{quesiton: "What is the difference between == and ===", answer: "== checks only values, while === checks both values and data types (strict equality)."},]
  const [showAnswer , setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  function handlePrevious(): void {
    if(currentIndex >0){
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  }
  function handleNext(): void {
    if(currentIndex <4 ){
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  }
  function handleShowAnswer(): void {
      if(showAnswer===false){
        setShowAnswer(true);
      }else if (showAnswer===true){
        setShowAnswer(false);
      }
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="">
          <p className="text-3xl mb-3 font-bold" >Flash Cards</p>
          <div className="flex items-center justify-between w-150 border border-gray-500 rounded-xl pl-1 pr-1">
            <div className="flex items-center">
              <div className="h-10 w-50 bg-gray-400 m-1 rounded-xl"></div>
              <div className="ml-3"><p>25%</p></div>
            </div>
            <div className="font-bold">{currentIndex+1} of 5</div>
          </div>
          <div className="border border-gray-500 rounded-xl mt-3 p-2 ">
            <div>
              <div className="flex items-center justify-center h-90 bg-gray-100 rounded-2xl">
                <div className="text-3xl w-90 font-bold ">{showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].quesiton}</div>
              </div>
              <div>
                <div className="flex items-center  h-12 bg-gray-100 rounded-2xl mt-2">
                <div className="flex justify-between w-full p-2">
                  <button onClick={handlePrevious}> &lt;  Previous</button>
                  <button onClick={handleShowAnswer} className="font-bold">Show Answer</button>
                  <button onClick={handleNext}>Next &gt;</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
