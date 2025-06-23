import * as React from "react";
import { Link } from "react-scroll";

export default function Upperbar() {
  return (
    <div
      className="grid lg:grid-cols-2 content-center h-[72px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="text-[#F68B1E] font-semibold text-lg grid content-center max-lg:justify-items-center">
        PK Ultrafast
      </div>
    </div>
  );
}
