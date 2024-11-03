import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className="text-white grid grid-rows-4 px-12 bg-neutral-900 text-lg border-b border-neutral-700"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-blue-950"
        to="tax"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Tax
      </Link>
      <Link
        activeClass="bg-blue-950"
        to="accounting"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Accounting
      </Link>
      <Link
        activeClass="bg-blue-950"
        to="auditing"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Auditing
      </Link>
      <Link
        activeClass="bg-blue-950"
        to="consulting"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Consulting
      </Link>
    </div>
  );
}