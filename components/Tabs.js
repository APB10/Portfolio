import React from "react";
import styles from "./Tabs.module.css";
import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className={styles.blocTabs}>
        <button
          className={
            toggleState === 1
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={
            toggleState === 2
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={
            toggleState === 3
              ? [styles.activeTabs, styles.tabs].join(" ")
              : styles.tabs
          }
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>
      {/* slider here  */}
      <div
        className=" h-[2px] w-1/3 bg-[#fd7f20] transition duration-500 ease-in-out"
        style={{ transform: `translateX(${toggleState * 100 - 100}%)` }}
      ></div>

      <div className="mx-2">
        <div
          className={toggleState === 1 ? styles.activeContent : styles.content}
        >
          <h2>Content 1</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? styles.activeContent : styles.content}
        >
          <h2>Content 2</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? styles.activeContent : styles.content}
        >
          <h2>Content 3</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
