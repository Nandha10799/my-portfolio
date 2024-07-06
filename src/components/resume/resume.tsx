import React, { useState } from "react";
import { Title } from "../layouts/title";
import Education from "./education";
import Skills from "./skills";
import Achievement from "./archievement";
import Experience from "./experience";

export const Resume: React.FC = () => {
  const [educationData, setEducationData] = useState<boolean>(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full  py-20 flex flex-col   items-center border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className=" flex justify-center items-center  p-3 ">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(false);
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
              setAchievementData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi p-2`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
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
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
};
