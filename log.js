import React from "react";
import { render } from "react-dom";
import { AnimatedBg, Transition } from "scroll-background-2";

const Example = () => (
 <AnimatedBg>
  <div style={{ height: "900px" }} />
  <Transition height="400px" from="#0D47A1" to="#388E3C" />
  <div style={{ height: "900px" }} />
  <Transition height="400px" from="#388E3C" to="#FFA000" position={0.75}>
   <h1>Content that appears within the transition</h1>
  </Transition>
  <div style={{ height: "900px" }} />
 </AnimatedBg>
);

render(<Example />, document.getElementById("root"));