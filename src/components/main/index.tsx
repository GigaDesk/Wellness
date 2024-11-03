import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";
import Partners from "./partners";
import Insights from "./Insights";
import { Element } from "react-scroll";

export default function Main() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="text-xl md:text-xxxl text-white bg-neutral-950 font-medium pt-48 px-12"
    >
      <Element name="do">
        Expert Guidance, Exceptional Service
        <p className="text-lg pt-4 font-normal">
          In today's dynamic business landscape, staying compliant and making
          informed financial decisions is crucial. Our team of seasoned
          professionals provides comprehensive tax, auditing, and consulting
          services, simplifying complex regulations and optimizing your
          financial performance.
        </p>
        <Element name="tax">
          <Service1
            name="Tax"
            description="Maximize Your Bottom Line, Minimize Your Tax Burden. Our expert tax advisors will navigate the complex tax landscape, ensuring you take advantage of every deduction and credit"
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/1HS2ChJmv5JjZ7C5wXyM71/b4ca314de26054c26e0d4b079ebc0845/6282312-hd_1920_1080_30fps.mp4"
          />
        </Element>
        <Element name="accounting">
          <Service2
            name="Accounting"
            description="Financial Clarity, Simplified. Let us handle the complexities of your financial operations. Our expert accountants provide accurate and timely financial reporting, allowing you to focus on what matters most: growing your business."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/1TzOgR6n3r96sBDUPobJwn/c11d9b16b9b52bdd0b5e14ac2687e789/6282202-hd_1920_1080_30fps.mp4"
          />
        </Element>
        <Element name="auditing">
          <Service1
            name="Auditing"
            description="Confidence in Every Number. Our rigorous audits provide assurance that your financial statements are accurate, reliable, and compliant with regulatory standards. "
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/1vGjlMNBkm9q5g8ZiCnG10/01e0182a936e159b243796d97532cd33/7821807-hd_1920_1080_30fps.mp4"
          />
        </Element>
        <Element name="consulting">
          <Service2
            name="Consulting"
            description="Transform Your Business, Elevate Your Performance. Our strategic consulting services help you identify opportunities, optimize operations, and drive sustainable growth."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/2xOUBq5avOcroUauRMoia9/02c91afb12996860add055260e5e2452/6282154-hd_1920_1080_30fps.mp4"
          />
        </Element>
      </Element>
      <Element name="think">
        <div className="grid justify-items-center mt-52"> Our Insights </div>
        <Insights />
      </Element>
      <Element name="are">
        <div className="grid justify-items-center pt-20"> Our Partners </div>
        <Partners />
      </Element>
    </div>
  );
}
