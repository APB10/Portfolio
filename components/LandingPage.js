import React, { useState } from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function Header() {
  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById("profileArea");
    portfolioElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="homeArea"
      className="grid place-content-center h-screen position: relative"
    >
      <h1 className=" text-3xl text-white text-center">
        Hello, I'm <span className="text-[#FD7F20]"> Ali P. Bouraki. </span>
        <h1> I'm a Front-End Developer </h1>{" "}
      </h1>

      <button
        id="lpbutton"
        onClick={scrollToPortfolio}
        className="group flex items-center justify-center text-[#FD7F20] bg-transparent border border-white py-4 shadow-md rounded-full font-bold my-4 
            hover:bg-white active:scale-90 transition duration-100 ease-in-out "
      >
        View my portfolio{" "}
        <ArrowNarrowRightIcon
          id="arrowIcon"
          className="pl-2 h-8 justify-end group-hover:rotate-90 transition duration-700 ease-in-out "
        />
      </button>
    </div>
  );
}

export default Header;
