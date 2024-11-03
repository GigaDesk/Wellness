import * as React from "react";
import { useState } from "react";

export default function Partners() {
  const [folioActive, setFolioActive] = useState(false);

  const handleFolioTrue = () => {
    setFolioActive(true);
  };

  const handleFolioFalse = () => {
    setFolioActive(false);
  };

  const [kmgActive, setKmgActive] = useState(false);

  const handleKmgTrue = () => {
    setKmgActive(true);
  };

  const handleKmgFalse = () => {
    setKmgActive(false);
  };

  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl text-white bg-neutral-950 font-medium pt-20 pb-20 grid md:grid-cols-2 gap-20"
    >
      <div
        className="text-purple-950 font-semibold text-lg grid content-center bg-white hover:bg-purple-950 hover:text-white cursor-pointer justify-items-center bg-white min-h-52"
        onMouseOver={handleFolioTrue}
        onMouseOut={handleFolioFalse}
      >
        {folioActive ? (
          <div className="font-normal text-base p-4 md:p-14">
            Our partnership with GigaDesk empowers us to deliver comprehensive,
            cutting-edge solutions. By combining our financial expertise with
            their technological prowess, we offer a seamless integration of
            services. This strategic alliance enables us to streamline
            operations, strengthen security, drive innovation, and optimize
            performance. Together, we're committed to helping your business
            thrive in the digital age.
          </div>
        ) : (
          "GigaDesk"
        )}
      </div>
      <div
        className="grid font-medium text-xxxl text-green-950 content-center bg-white hover:bg-green-950 hover:text-white cursor-pointer justify-items-center min-h-52"
        onMouseOver={handleKmgTrue}
        onMouseOut={handleKmgFalse}
      >
        {kmgActive ? (
          <div className="font-normal text-base p-4 md:p-14">
            Backed by the strength and resources of the KMG Group, we offer a
            comprehensive suite of services that empower businesses to thrive.
            Our integrated approach combines deep industry expertise with
            cutting-edge technology to deliver innovative solutions across a
            wide range of sectors.
          </div>
        ) : (
          "KMG"
        )}
      </div>
    </div>
  );
}
