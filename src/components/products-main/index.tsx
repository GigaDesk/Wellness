import * as React from "react";
import Insights from "./Insights";
import { Element } from "react-scroll";

export default function Main() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="bg-white text-xl md:text-xxxl bg-neutral-950 font-medium pt-48 px-12"
    >
      <Element name="think">
        <Insights />
      </Element>
    </div>
  );
}
