import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

function InfoCard() {
  return (
    <div>
      <Header />
      {/* Main container */}
      <div className="flex text-white m-2 md:m-32 md:space-x-20 space-y-2 sm:space-y-0 flex-col sm:flex-row">
        {/* Left - profile container  */}
        <div className=" text-center sm:w-1/3  space-y-6 border border-[#FD7F20] rounded-lg py-2 sm:py-4 backdrop-blur-sm">
          <div>
            <h1 className="md:text-2xl">Ali P. Bouraki</h1>
            <p>Front-End Developer</p>
          </div>
          <button
            className="items-center border border-[#FD7F20] md:p-2 rounded-xl  hover:text-[#FD7F20] cursor-pointer 
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1mTdSl64JxpMLYPG19GRNmHtn_Lhpfr7E/view?usp=sharing"
              )
            }
          >
            Resumé
          </button>
          <div>
            <h2 className=" font-bold pt-2 text-[#FD7F20]">Location</h2>
            <p>Glasgow, Scotland</p>
          </div>
          <div>
            <h2 className=" font-bold pt-2 text-[#FD7F20]">E-mail</h2>
            <p>ali_panahi10@hotmail.com</p>
          </div>
          <div>
            <h2 className=" font-bold pt-2 text-[#FD7F20]">GitHub</h2>
            <p
              className=" cursor-pointer hover:text-[#FD7F20] hover:underline"
              onClick={() => window.open("https://github.com/APB10")}
            >
              github.com/APB10
            </p>
          </div>
        </div>

        {/* Right - content container  */}
        <div className=" w-full md:w-2/3 border border-[#FD7F20] backdrop-blur-sm rounded-lg py-2 sm:py-4">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
