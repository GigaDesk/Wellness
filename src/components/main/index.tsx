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
      className="bg-white text-xl md:text-xxxl bg-neutral-950 font-medium pt-48 px-12"
    >
      <Element name="do">
        Order Now, Pay On Free Delivery
        <p className="text-lg pt-4 font-normal">
          Experience ultimate convenience and peace of mind with our service.
          Simply order now and your items will be on their way, with the added
          benefit of free delivery. You only pay once your order arrives safely
          at your doorstep, ensuring you get exactly what you expect,
          hassle-free.
        </p>
        <Element name="men">
          <Service1
            name="Men's Wellness & Physique"
            description="Unleash your full potential and sculpt the physique you desire. Our Men's Wellness & Physique collection is expertly designed to help you enhance your appearance, boost your confidence, and support your journey to peak masculine vitality. From targeted slimming solutions to natural enhancement, discover the products that empower you to look and feel your absolute best."
            video="https://images.ctfassets.net/vjt7hlwnzx7i/5Odny5sEp9FADXFi1azo8Z/96194d275fb6e1a3efa293e6142b66e0/WhatsApp_Image_2025-06-04_at_6.29.45_PM.jpeg"
          />
        </Element>
        <Element name="home">
          <Service2
            name="Home & Auto Repair Solutions"
            description="Don't let leaks, breaks, or drafts disrupt your home or vehicle. Our Home & Auto Repair Solutions offer reliable, easy-to-use products that empower you to tackle common fixes with confidence. Save time and money with our professional-grade glues, sealants, and weatherproofing essentials, ensuring your space is always secure and well-maintained."
            video="https://images.ctfassets.net/vjt7hlwnzx7i/1xbV6EkWH7bCN0NhoAr7Nk/ddf2e049aec5c6ab604061ac857be2de/WhatsApp_Image_2025-06-04_at_6.31.15_PM.jpeg"
          />
        </Element>
        <Element name="personal care">
          <Service1
            name="Personal Care & Beauty Enhancements"
            description="Elevate your daily routine and reveal your natural radiance with our curated Personal Care & Beauty Enhancements. From luscious hair to glowing skin and discreet support, our collection offers innovative solutions to help you look and feel beautiful, confident, and refreshed from head to toe. Embrace self-care and discover the difference. "
            video="https://images.ctfassets.net/vjt7hlwnzx7i/1i3G0Gin9sgfaX23CUwep7/f721550f03a70eb0905907adda4ffef0/WhatsApp_Image_2025-06-04_at_6.33.51_PM.jpeg"
          />
        </Element>
        <Element name="orthopedic">
          <Service2
            name="Orthopedic & Posture Support"
            description="Find relief, improve your posture, and regain comfort with our specialized Orthopedic & Posture Support range. Designed to provide targeted support and alleviate discomfort, these products help you move freely, stand tall, and support your body's natural alignment. Invest in your well-being and embrace a life with less pain and greater mobility."
            video="https://images.ctfassets.net/vjt7hlwnzx7i/4Z76VaGR8LGcRM2zDMfQ86/a60cd7d0eb4d5870eb9610c1f7eb2540/WhatsApp_Image_2025-06-04_at_6.33.05_PM.jpeg"
          />
        </Element>
      </Element>
      <Element name="think">
        <div className="grid justify-items-center mt-52"> Our Products </div>
        <Insights />
      </Element>
      <Element name="are">
        <div className="grid justify-items-center pt-20"> Our Partners </div>
        <Partners />
      </Element>
    </div>
  );
}
