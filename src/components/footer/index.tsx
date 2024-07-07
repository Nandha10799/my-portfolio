import React from "react";
import { FaEnvelope, FaMobile, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full py-5 border-b-[1px] border-b-black">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Contact Details:
        </h3>
        <div className="mt-5 px-5 flex items-center gap-3">
          <FaEnvelope />
          <p>nandha10799@gmail.com</p>
        </div>
        <div className="mt-5 px-5 flex items-center gap-3">
          <FaMobile />
          <p>+91 9524373224</p>
        </div>
        <div className="mt-5 px-5 flex items-center gap-3">
          <FaLinkedin />
          <p>linkedin.com/in/nandhakumar-m-81b8841a1</p>
        </div>
      </div>
      <div className="w-full py-10">
        <p className="text-center text-gray-500 text-base">
          © 2024. All rights reserved by{" "}
          <span className="text-designColor">Nandhakumar M.</span>
        </p>
      </div>
    </>
  );
};
