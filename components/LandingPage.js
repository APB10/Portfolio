import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="grid place-content-center h-screen position: relative">
      <h1 className=" text-3xl text-white text-center">
        Hello, I'm <span className="text-[#FD7F20]"> Ali P. Bouraki. </span>
        <h1> I'm a Front-End Developer </h1>{" "}
      </h1>
      <button
        className="flex items-center justify-center text-[#FD7F20] bg-transparent border border-white py-4 shadow-md rounded-full font-bold my-4 
            hover:bg-white active:scale-90 transition duration-100 ease-in-out "
      >
        View my portfolio{" "}
        <ArrowNarrowRightIcon className="pl-2 h-8 justify-end" />{" "}
      </button>
    </div>
  );
}

export default Header;
