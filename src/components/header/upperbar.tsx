import * as React from "react";
import { Link } from "react-scroll";

export default function Upperbar() {
  return (
    <div
      className="grid lg:grid-cols-2 content-center h-[72px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="text-[#F68B1E] font-semibold text-lg grid content-center max-lg:justify-items-center">
        Company
      </div>
      <div className="grid grid-cols-3 max-lg:hidden">
      <Link
          activeClass="font-medium"
          to="do"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>What we do</div>
        </Link>
        <Link
          activeClass="font-medium"
          to="think"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Our Products</div>
        </Link>
        <Link
          activeClass="font-medium"
          to="are"
          spy={true}
          offset={-50}
          smooth={true}
          className="cursor-pointer"
        >
          <div>About us</div>
        </Link>
      </div>
    </div>
  );
}
