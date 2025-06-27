import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";
import Partners from "./partners";
import Insights from "./Insights";
import { Element } from "react-scroll";
import ReactWhatsapp from "react-whatsapp";

export default function Main() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="bg-white text-xl md:text-xxxl bg-neutral-950 font-medium pt-48 px-12"
    >
      <Element name="do">
        Order Now, Pay On Free Delivery
        <div className="grid grid-cols-[1fr_4fr] gap-4">
        <ReactWhatsapp number="+254796645252" element="button">
        <button className="w-20 h-20 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
          <svg
            className="relative w-20 h-20 z-10 transition-all duration-300 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 71 72"
            fill="none"
          >
            <path
              d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
              fill=""
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
              fill=""
            />
          </svg>
          <div className="absolute left-0 w-full h-full rounded-full bg-green-400 z-0 transition-all duration-500 group-hover:top-0"></div>
        </button>
      </ReactWhatsapp>
      <div className="grid content-center">or call: +254706880300</div>
      </div>
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
        <div className="grid justify-items-center pt-20"></div>
      </Element>
    </div>
  );
}
