import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaNode,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiPrisma, SiVite } from "react-icons/si";

export const Media: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6  justify-between">
      <div className="">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span
            className="bannerIcon"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61550328200495"
              )
            }
          >
            <FaFacebookF />
          </span>
          <span
            className="bannerIcon"
            onClick={() => window.open("https://x.com/nandha10799")}
          >
            <FaTwitter />
          </span>
          <span
            className="bannerIcon"
            onClick={() => window.open("https://www.instagram.com/nk10_11/")}
          >
            <FaInstagram />
          </span>
          <span
            className="bannerIcon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nandhakumar-m-81b8841a1/"
              )
            }
          >
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
