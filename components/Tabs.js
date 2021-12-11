import React from "react";
import styles from "./Tabs.module.css";

function Tabs() {
  return (
    <div>
      <ul className={styles.tabs}>
        <li className={styles.current}>Employment</li>
        <li>Academic</li>
        <li>Skills</li>
      </ul>
      <div className="mx-2 mt-4">
        <p>
          s its finest peacekeeper, Caitlyn is also Piltover’s best shot at
          ridding the city of its elusive criminal elements. She is often paired
          with Vi, acting as a cool counterpoint to her partner’s more impetuous
          nature. Even though she carries a one-of-a-kind hextech rifle,
          Caitlyn’s most powerful weapon is her superior intellect, allowing her
          to lay elaborate traps for any lawbreakers foolish enough to operate
          in the City of Progress.
        </p>
      </div>
    </div>
  );
}

export default Tabs;
