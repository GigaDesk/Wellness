import * as React from "react";
import SocialMediaLinks from "./socialMediaLinks";

export default function Footer() {
  return (
    <div
      className="text-sm md:text-xxl bg-white font-medium py-12 px-8"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="grid md:grid-cols-2">
        <div>
          <div>FOLLOW US</div>
          <div>
            <SocialMediaLinks />
          </div>
        </div>
        <div>
          <div className="pb-4">GET IN TOUCH</div>
          <div className="pt-4">
            <div className="inline-block">
              <svg
                className="inline-block"
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.688 16.096C9.57867 16.096 8.576 15.8507 7.68 15.36C6.79467 14.8693 6.096 14.192 5.584 13.328C5.08267 12.4533 4.832 11.4773 4.832 10.4C4.832 9.32267 5.08267 8.352 5.584 7.488C6.096 6.61333 6.8 5.93067 7.696 5.44C8.592 4.94933 9.59467 4.704 10.704 4.704C11.536 4.704 12.304 4.84267 13.008 5.12C13.712 5.39733 14.3093 5.80267 14.8 6.336L14.048 7.088C13.1733 6.20267 12.0693 5.76 10.736 5.76C9.85067 5.76 9.04533 5.96267 8.32 6.368C7.59467 6.77333 7.024 7.328 6.608 8.032C6.20267 8.736 6 9.52533 6 10.4C6 11.2747 6.20267 12.064 6.608 12.768C7.024 13.472 7.59467 14.0267 8.32 14.432C9.04533 14.8373 9.85067 15.04 10.736 15.04C12.08 15.04 13.184 14.592 14.048 13.696L14.8 14.448C14.3093 14.9813 13.7067 15.392 12.992 15.68C12.288 15.9573 11.52 16.096 10.688 16.096Z"
                  fill="white"
                />
                <circle cx="10" cy="10" r="9.5" stroke="white" />
              </svg>
            </div>
            <p className="inline-block text-base font-normal">
              2024. All Rights Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
