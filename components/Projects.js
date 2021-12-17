import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <div id="projectsArea">
      <h1 className="text-white text-center p-12 text-2xl">Projects</h1>
      <p className="text-white text-center text-sm mb-12">
        Some projects I've been working on recently
      </p>
      {/* Container */}
      <div className="sm:flex sm:w-[80%] sm:m-auto flex-row sm:space-y-0 space-y-4 sm:space-x-8 justify-center ">
        {/* Box 1  */}
        <div className="border-2 rounded-2xl  sm:w-1/3 backdrop-blur-sm pt-2">
          <div className="mx-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3>Airbnb Clone</h3>
              </div>
              <div
                className="relative h-8 w-8 md:h-12 cursor-pointer my-auto 
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              >
                <Image
                  src="https://i.imgur.com/tMgGlnE.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                  onClick={() =>
                    window.open("https://github.com/APB10/AirBnB-clone")
                  }
                />
              </div>
            </div>
            <p className="mt-8">
              A project cloning the home and search page of the popular property
              renstal site Airbnb.
            </p>
            <div className="flex justify-end">
              <button
                className="mt-[25%] text-right hover:underline cursor-pointer hover:text-[#fd7f20]"
                onClick={() =>
                  window.open("https://air-bnb-clone-ebon.vercel.app/")
                }
              >
                View Demo &gt;
              </button>
            </div>

            <div className="flex justify-end text-xs text-[#fd7f20] space-x-4 p-4 sm:pr-0">
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                Next.js
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                GeoLib
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                TailwindCSS
              </div>
            </div>
          </div>
        </div>
        {/* Box 2  */}
        <div className="border-2 rounded-2xl  sm:w-1/3 backdrop-blur-sm pt-2">
          <div className="mx-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3>PortFolio Demo</h3>
              </div>
              <div
                className="relative h-8 w-8 md:h-12 cursor-pointer my-auto 
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              >
                <Image
                  src="https://i.imgur.com/tMgGlnE.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                  onClick={() =>
                    window.open("https://github.com/APB10/Portfolio")
                  }
                />
              </div>
            </div>
            <p className="mt-8">
              An online portfolio demostrating user profile, skill, socials and
              projects
            </p>
            <div className="flex justify-end ">
              <button
                className="mt-[25%] text-right hover:underline cursor-pointer hover:text-[#fd7f20]"
                onClick={() =>
                  window.open("https://air-bnb-clone-ebon.vercel.app/")
                }
              >
                View Demo &gt;
              </button>
            </div>
            <div className="flex justify-end text-xs text-[#fd7f20] space-x-4 sm:bottom-4 sm:right-4 sm:fixed p-4 sm:p-0 ">
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                Next.js
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                NPM
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                TailwindCSS
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                TSparticles
              </div>
            </div>
          </div>
        </div>
        {/* Box 3  */}
        {/* <div className="border-2 rounded-2xl  sm:w-1/3 backdrop-blur-sm pt-2">
          <div className="mx-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3>Airbnb Clone</h3>
              </div>
              <div
                className="relative h-8 w-8 md:h-12 cursor-pointer my-auto 
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              >
                <Image
                  src="https://i.imgur.com/tMgGlnE.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                  onClick={() => window.open("https://github.com/APB10")}
                />
              </div>
            </div>
            <p className="mt-8">
              A project cloning the home and search page of the popular property
              renstal site Airbnb.
            </p>
            <div className="flex justify-end">
              <button
                className="mt-[25%] text-right hover:underline cursor-pointer hover:text-[#fd7f20]"
                onClick={() =>
                  window.open("https://air-bnb-clone-ebon.vercel.app/")
                }
              >
                View Demo &gt;
              </button>
            </div>
            <div className="flex justify-end text-xs text-[#fd7f20] space-x-4 sm:bottom-4 sm:right-4 sm:fixed p-4 sm:p-0">
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                Next.js
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                GeoLib
              </div>
              <div className="border-2 border-[#fd7f20] p-1 rounded-md">
                TailwindCSS
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* change width to 80% upon 3 projects  */}
      <div className="flex justify-end  w-[55%] m-auto mt-4">
        <button
          className="text-white  cursor-pointer hover:text-[#fd7f20]"
          onClick={() => window.open("https://github.com/APB10")}
        >
          View more on GitHub &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;
