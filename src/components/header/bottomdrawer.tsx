import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className=" grid grid-rows-4 px-12 text-lg border-b border-neutral-700"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-orange-800 text-white"
        to="men"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Men
      </Link>
      <Link
        activeClass="bg-orange-800 text-white"
        to="home"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Home & Repair
      </Link>
      <Link
        activeClass="bg-orange-800 text-white"
        to="personal care"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Personal Care
      </Link>
      <Link
        activeClass="bg-orange-800 text-white"
        to="orthopedic"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Orthopedic
      </Link>
    </div>
  );
}