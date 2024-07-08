import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Media } from "./media";
import { FaDownload } from "react-icons/fa";

export const LeftBanner: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Professional Coder.",
      "Node Js Developer.",
      "React Js Developer.",
      "Wep Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?id=1sfBwtB7D9mu8Gm2558hC0yqL9TrLBfou&export=download"; // Replace with your actual file URL
    link.download = "Resume.pdf"; // Specify the filename for the downloaded file
    link.click();
  };

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://drive.google.com/file/d/1sfBwtB7D9mu8Gm2558hC0yqL9TrLBfou/view?usp=sharing"; // Replace with your actual file URL
  //   link.download = "Resume.pdf"; // Specify the filename for the downloaded file
  //   link.target = "_blank"; // Optional: Opens the link in a new tab
  //   document.body.appendChild(link); // Append the link to the DOM
  //   link.click(); // Simulate a click event to trigger the download
  //   document.body.removeChild(link); // Clean up: remove the element from the DOM once downloaded
  // };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY REALM</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Nandhakumar</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#e80e0e" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a passionate Full Stack web developer with experience developing
          Full Stack web applications with React.js,Node.js and AWS
          Technologies. I am strongly interested in learning new technologies
          and implementing them in my projects. I'm a self-motivated and
          hardworking individual who is always ready to learn new things and
          work in a team.
        </p>
      </div>
      <div className="w-full">
        <button
          className="bg-red-600 py-4 px-5 w-[80%] mx-auto lgl:mx-0 lgl:w-[40%] rounded-lg font-semibold justify-center flex items-center gap-3"
          onClick={() => {
            handleDownload();
          }}
        >
          <span>
            <FaDownload />
          </span>
          <span>Download Resume</span>
        </button>
      </div>
      <Media />
    </div>
  );
};
