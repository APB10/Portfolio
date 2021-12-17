import React from "react";
import Link from "next/link";

function Footer() {
  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById("profileArea");
    portfolioElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex-col sm:m-32">
      <h1 className=" text-3xl text-white text-center">
        Want to get in touch?
      </h1>
      <p className=" text-white text-center m-16">
        Feel free to drop me an e-mail -
        <span className="text-[#fd7f20] cursor-pointer">
          {" "}
          <Link href="mailto:ali_panahi10@hotmail.com">
            <a>ali_panahi10@hotmail.com </a>
          </Link>
        </span>
      </p>
      <div className="text-white text-center w-[60%] mx-auto border-t-2">
        <a
          onClick={scrollToPortfolio}
          className="hover:cursor-pointer hover:text-[#fd7f20]"
        >
          Back to the top
        </a>
      </div>
    </div>
  );
}

export default Footer;
