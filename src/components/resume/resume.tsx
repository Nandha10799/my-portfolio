import React, { useState } from "react";
import { Title } from "../layouts/title";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";

export const Resume: React.FC = () => {
  const [educationData, setEducationData] = useState<boolean>(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full  py-20 flex flex-col items-center border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className=" flex justify-center items-center ">
        {/* small screen visibility otherwise its hidden*/}
        <ul className="sm:visible lg:hidden w-full sm:grid sm:grid-cols-3 text-center">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi w-full p-2  `}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi p-2`}
          >
            Technical Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi p-2`}
          >
            Experience
          </li>
        </ul>

        {/* large screen visibility otherwise its hidden*/}
        <ul className="hidden lg:visible w-full lg:grid lg:grid-cols-2 text-center">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi w-full p-2  `}
          >
            Experience & Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi p-2`}
          >
            Technical Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};
