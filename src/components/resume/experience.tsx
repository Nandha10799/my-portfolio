import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./resumeCard";

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Quality Control"
            subTitle="TNQ Technologies- (2020-2022)"
            result="Coimbatore"
            des="
A quality control specialist in an e-publishing company ensures the accuracy, consistency, and readability of digital publications. They review and proofread content, check formatting, verify hyperlinks and interactive elements, and ensure compliance with company and industry standards. They also collaborate with authors, editors, and designers to address any issues and implement improvements, ensuring a high-quality product for the end user."
          />
          <ResumeCard
            title=" Software Engineer"
            subTitle="GoZen Technologies- (2024 - Present)"
            result="Coimbatore"
            des="A software engineer designs, develops, and maintains software systems. They apply engineering principles to create software solutions, ensuring functionality, scalability, and performance. Tasks include coding, testing, debugging, and collaborating with other team members to meet project requirements and deadlines."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
