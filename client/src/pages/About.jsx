import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            saepe ea sed magnam deserunt aliquam veniam distinctio eius suscipit
            esse libero earum, ut explicabo odit? Autem eos, ipsum magni
            voluptates quidem?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            excepturi expedita provident ratione ea officiis itaque officia
            nobis, delectus ex minus architecto ab natus! Porro ad amet hic
            explicabo aliquam facere enim autem velit molestias. Vero sed
            voluptatibus voluptatum quae?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            laboriosam eligendi similique autem, dignissimos sequi error vitae
            est deserunt, ad, qui repellendus animi et excepturi!
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFICIENCY:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam aperiam quae?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae voluptates ratione illum!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae provident facilis molestias cumque?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
