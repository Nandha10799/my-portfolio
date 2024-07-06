import React from "react";
import { Title } from "../layouts/title";
import ProjectsCard from "./projectCard";
import { projectData, typeProjectData } from "./data";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          para="I've had the pleasure of working on diverse projects over the years,
            each contributing to my growth and passion for innovation. Many of
            these endeavors are open-source, inviting others to explore and
            contribute. Your insights and enhancements are welcome as we
            collaborate, learn, and evolve together. Let's embark on this
            journey of collective growth and discovery!"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project: typeProjectData) => {
          return (
            <ProjectsCard
              key={project.title}
              title={project.title}
              des={project.des}
              src={project.src}
              webLink={project.webLink}
            />
          );
        })}
      </div>
    </section>
  );
};
