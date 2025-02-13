import React, { useState } from "react";
import { navLinksData } from "../../constant";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { navLogo } from "../../assets";

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex justify-center items-end">
        <div className="border border-gray-500 h-14 w-14 p-2 rounded-full flex items-center">
          <img className="rounded-full" src={navLogo} alt="logo" />
        </div>
        <p className="text-md">NK</p>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={navLogo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I specialize in React.js for frontend and Node.js for backend
                  development, focusing on innovative solutions and dynamic web
                  applications with modern JavaScript frameworks.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksData.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
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
                    onClick={() =>
                      window.open("https://www.instagram.com/nk10_11/")
                    }
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
