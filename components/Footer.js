import React from "react";

function Footer() {
  return (
    <div className="flex-col m-32">
      <h1 className=" text-3xl text-white text-center">
        Want to get in touch?
      </h1>
      <p className=" text-white text-center m-16">
        Feel free to drop me an e-mail -
        <span className="text-[#fd7f20] cursor-pointer">
          {" "}
          ali_panahi10@hotmail.com
        </span>
      </p>
    </div>
  );
}

export default Footer;
