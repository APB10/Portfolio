import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-transparent p-5 md:px-10 border-b-2 border-white ">
      {/* Left - Logo */}
      <div
        onClick={() => router.push("/")}
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
              PROFILE
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
