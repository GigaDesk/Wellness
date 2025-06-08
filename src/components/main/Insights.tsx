import * as React from "react";

export default function Insights() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="text-base font-normal pt-8 grid"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="grid grid-rows-[1fr_50px] justify-items-center">
          <img src="https://images.ctfassets.net/vjt7hlwnzx7i/5Odny5sEp9FADXFi1azo8Z/96194d275fb6e1a3efa293e6142b66e0/WhatsApp_Image_2025-06-04_at_6.29.45_PM.jpeg" />
          <div className="bg-[#F68B1E] w-full text-white grid justify-items-center content-center"> Slimming ginger essential oil for men @Ksh 3,499</div>
        </div>
        <div className="grid grid-rows-[1fr_50px] justify-items-center">
          <img src="https://images.ctfassets.net/vjt7hlwnzx7i/4Z76VaGR8LGcRM2zDMfQ86/a60cd7d0eb4d5870eb9610c1f7eb2540/WhatsApp_Image_2025-06-04_at_6.33.05_PM.jpeg" />
          <div className="bg-[#F68B1E] w-full text-white grid justify-items-center content-center"> Compression knee brace @Ksh 3,499</div>
        </div>
        <div className="grid grid-rows-[1fr_50px] justify-items-center">
          <img src="https://images.ctfassets.net/vjt7hlwnzx7i/1xbV6EkWH7bCN0NhoAr7Nk/ddf2e049aec5c6ab604061ac857be2de/WhatsApp_Image_2025-06-04_at_6.31.15_PM.jpeg" />
          <div className="bg-[#F68B1E] w-full text-white grid justify-items-center content-center"> Anti-leak sealant @Ksh 2,999 for 1 & Ksh 3,999 for 2</div>
        </div>
      </div>
      <div className="text-[#F68B1E] w-full grid justify-items-center p-8">View more</div>
    </div>
  );
}
