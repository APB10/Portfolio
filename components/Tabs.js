import React from "react";
import styles from "./Tabs.module.css";
import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="h-full">
      <div className=" items-center flex flex-col sm:flex-row justify-evenly ">
        <button
          className={
            toggleState === 1
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(1)}
        >
          About me
        </button>
        <button
          className={
            toggleState === 2
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(2)}
        >
          Employment
        </button>
        <button
          className={
            toggleState === 3
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(3)}
        >
          Academic
        </button>
        <button
          className={
            toggleState === 4
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(4)}
        >
          Skills
        </button>
      </div>
      {/* slider component  */}
      <div
        className="hidden sm:block h-[2px] w-1/4 bg-[#fd7f20] transition duration-500 ease-in-out"
        style={{ transform: `translateX(${toggleState * 100 - 100}%)` }}
      ></div>

      <div className="mx-2 mt-8 text-center">
        <div
          className={toggleState === 1 ? styles.activeContent : styles.content}
        >
          <p>
            After Graduating I’ve joined a small company as a junior SharePoint
            developer. Whilst employed there for almost 2 years I’ve broaden my
            experiences and knowledge working with cliental around the global,
            Being part of group &amp; solo projects using different
            technologies. Most of which I didn’t have any prior knowledge to but
            it was interesting exploring and learning all the different possible
            technologies being used today for development.
          </p>
          <br></br>
          <p>
            During my time there I realised I want my career to be more focus on
            mainstream and upcoming technologies. I’ve been working on personal
            projects displayed on my GitHub account to further my skills in
            becoming a front-end developer, it is something I passionately and
            diligently pursue after.
          </p>
        </div>

        <div
          className={toggleState === 2 ? styles.activeContent : styles.content}
        >
          <h2>Junior SharePoint Developer </h2>
          <p className="border-b-2 w-[80%] m-auto">
            Cloud Cover IT, Glasgow (Jan 2020 – Oct 2021)
          </p>
          <br></br>
          <ul className=" text-left mx-12 list-disc list-outside">
            <li className="mb-2">
              Performed software testing to uncover bugs and troubleshoot
              PowerApps &amp; Web apps issues prior to application launch.
            </li>
            <li className="mb-2">
              Authored code fixes and enhancements for cliental upon their
              request and discussions
            </li>
            <li className="mb-2">
              Developed Web apps used in SharePoint platform using React
              Libraries with JavaScript and TypeScript
            </li>
            <li className="mb-2">
              Created UX &amp; UI designs during planning stage for application
              development
            </li>
          </ul>
        </div>

        <div
          className={toggleState === 3 ? styles.activeContent : styles.content}
        >
          <h2>Computer Science, BSc (Hons) </h2>
          <p className=" border-b-2 w-[80%] m-auto pb-4">
            University of West of Scotland (2019) 2:1
          </p>
          <br></br>
          <h2>Certification</h2>
          <ul className="my-4 space-y-2 text-left mx-auto w-2/3">
            <li>Microsoft Certified: Power Platform App Maker Associate</li>
            <li>Microsoft Certified: Power Platform Fundamentals</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>FreeCodeCamp Certified: Responsive Web Design</li>
          </ul>
        </div>

        <div
          className={toggleState === 4 ? styles.activeContent : styles.content}
        >
          <div className=" md:space-y-10 space-y-4 sm:mb-0 mb-2">
            {/* First skill column  */}
            <div className="flex justify-evenly ">
              <div className="w-1/3">
                HTML &amp; CSS
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20]  h-2 w-[85%]"></div>
                </div>
              </div>

              <div className="w-1/3">
                UX &amp; UI
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20] h-2 w-[55%]"></div>
                </div>
              </div>
            </div>

            {/* Second skill column  */}
            <div className="flex justify-evenly ">
              <div className="w-1/3">
                Git
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20]  h-2 w-[55%]"></div>
                </div>
              </div>

              <div className="w-1/3">
                TailwindCSS
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20] h-2 w-[80%]"></div>
                </div>
              </div>
            </div>
            {/* Third skill column  */}
            <div className="flex justify-evenly ">
              <div className="w-1/3">
                JavaScript
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20]  h-2 w-[60%]"></div>
                </div>
              </div>

              <div className="w-1/3">
                TypeScript
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20] h-2 w-[30%]"></div>
                </div>
              </div>
            </div>

            {/* Fourth skill column  */}
            <div className="flex justify-evenly ">
              <div className="w-1/3">
                Figma
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20]  h-2 w-[80%]"></div>
                </div>
              </div>

              <div className="w-1/3">
                React
                <div className="w-full bg-white h-2">
                  <div className=" bg-[#fd7f20] h-2 w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
