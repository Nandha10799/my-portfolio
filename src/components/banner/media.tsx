import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiTailwindcss, SiPrisma, SiVite } from "react-icons/si";

export const Media: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6  justify-between">
      <div className="">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className="ml-2">
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiVite />
          </span>
          <span className="bannerIcon">
            <FaNode />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiPrisma />
          </span>
        </div>
      </div>
    </div>
  );
};
