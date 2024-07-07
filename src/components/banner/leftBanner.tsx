import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Media } from "./media";

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
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
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
      <Media />
    </div>
  );
};
