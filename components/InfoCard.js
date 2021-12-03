import React from "react";
import Header from "./Header";

function InfoCard() {
  return (
    <div>
      <Header />
      {/* Main container */}
      <div className="flex flex-1  ">
        {/* Left - profile container  */}
        <div>
          <p>Test1</p>
        </div>

        {/* Right - content container  */}
        <div>
          <p>Test2</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
