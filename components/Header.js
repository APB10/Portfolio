import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

function Header() {
  const router = useRouter();

  const scrollToHome = () => {
    const portfolioElement = document.getElementById("homeArea");
    portfolioElement.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const portfolioElement = document.getElementById("projectsArea");
    portfolioElement.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById("profileArea");
    portfolioElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="profileArea"
      className="top-0 z-50 flex items-center justify-between bg-transparent p-5 md:px-10 border-b-2 border-white "
    >
      {/* Left - Logo */}
      <div
        onClick={() => router.push("#homeArea")}
        className="relative flex items-center h-12 w-12  cursor-pointer my-auto"
      >
        <Image
          src="https://i.imgur.com/44zQ5fm.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div>
        <ul className="flex text-white justify-center md:text-2xl ">
          <li className="ml-6 mr-6">
            <a
              onClick={scrollToHome}
              className=" hover:text-[#FD7F20] active:underline active:text-[#FD7F20] hover:cursor-pointer"
            >
              HOME
            </a>
          </li>
          <li className="mr-6">
            <a
              onClick={scrollToPortfolio}
              className=" hover:text-[#FD7F20] active:underline active:text-[#FD7F20] hover:cursor-pointer"
            >
              PROFILE
            </a>
          </li>
          <li className="mr-6">
            <a
              onClick={scrollToProjects}
              className=" hover:text-[#FD7F20] active:underline active:text-[#FD7F20] hover:cursor-pointer"
            >
              PROJECTS
            </a>
          </li>
        </ul>
      </div>

      {/* Right - User Icons */}
      <div className="relative items-center h-8 w-8 md:h-12 cursor-pointer my-auto ">
        <Image
          src="https://i.imgur.com/tMgGlnE.png"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          onClick={() => window.open("https://github.com/APB10")}
        />
      </div>
    </header>
  );
}

export default Header;
