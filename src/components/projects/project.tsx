import React from "react";
import { Title } from "../layouts/title";
import ProjectsCard from "./projectCard";
import { contentAiExtensionImg, contentAiImg, notifyImg } from "../../assets";

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
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          webLink={"https://gozen.io/contentai"}
          title="Content.Ai"
          des="GoZen Content.AI is a cutting-edge platform designed to revolutionize the way you create, manage, and optimize your digital content. Leveraging the power of artificial intelligence, Gozen Content.AI offers a comprehensive suite of tools that cater to content creators, marketers, and businesses looking to enhance their online presence."
          src={contentAiImg}
        />
        <ProjectsCard
          title="Content.Ai Chrome Extension"
          webLink={"https://gozen.io/contentai"}
          des="Content.ai is a powerful Chrome extension designed to revolutionize your content creation process. Whether you're a blogger, marketer, student, or professional writer, Content.ai provides you with intelligent tools to create high-quality content effortlessly."
          src={contentAiExtensionImg}
        />
        <ProjectsCard
          title="GoZen Notify"
          webLink={"https://gozen.io/notify"}
          des="GoZen Notify is a cutting-edge notification service designed to keep you informed and connected with real-time updates. Whether you are a business professional, a developer, or a casual user, Gozen Notify ensures that you never miss an important message."
          src={notifyImg}
        />
      </div>
    </section>
  );
};
