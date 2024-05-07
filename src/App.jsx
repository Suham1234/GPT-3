import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Companies,
  WhatGpt3,
  Features,
  Possibilities,
  CTA,
  Blog,
  Footer,
} from "./containers";

const App = () => {
  return (
    <div className={`bg-blue-gradient w-full overflow-hidden  `}>
      <div className={`${styles.paddingX} `}>
        <Navbar />
        <Hero />
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.paddingY}`}>
        <Companies />
        <WhatGpt3 />
        <Features />
        <Possibilities />
        <CTA />
        <Blog />
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
