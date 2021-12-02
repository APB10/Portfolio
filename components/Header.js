import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-transparent shadow-md p-5 md:px-10 border-b-2 border-white ">
      {/* Left - Logo */}
      <div className="relative flex items-center h-12 cursor-pointer my-auto ">
        <Image
          src="https://i.imgur.com/44zQ5fm.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div>
        <ul className="flex text-white justify-between md:text-2xl font-light ">
          <li className="ml-6 mr-6">
            <a
              className=" hover:text-[#FD7F20] active:underline active:text-[#FD7F20]"
              href="#"
            >
              HOME
            </a>
          </li>
          <li className="mr-6">
            <a
              className=" hover:text-[#FD7F20] active:underline active:text-[#FD7F20]"
              href="#"
            >
              ABOUT
            </a>
          </li>
          <li className="mr-6">
            <a
              className=" hover:text-[#FD7F20] active:underline active:text-[#FD7F20]"
              href="#"
            >
              PROJECTS
            </a>
          </li>
        </ul>
      </div>

      {/* Right - User Icons */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <h1>Right</h1>
      </div>
    </header>
  );
}

export default Header;
