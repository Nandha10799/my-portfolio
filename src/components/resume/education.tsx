import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./resumeCard";

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-row lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Experience Part */}
      <div className="hidden lg:block lg:w-[50%]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full min-h-[700px] max-h-[800px] border-l-[6px] border-l-black border-opacity-10 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="GoZen Technologies- (2024 - Present)"
            result="Coimbatore"
            des="A software engineer designs, develops, and maintains software systems. They apply engineering principles to create software solutions, ensuring functionality, scalability, and performance. Tasks include coding, testing, debugging, and collaborating with other team members to meet project requirements and deadlines."
          />
          <ResumeCard
            title="Quality Control"
            subTitle="TNQ Technologies- (2020-2022)"
            result="Coimbatore"
            des="A quality control specialist in an e-publishing company ensures the accuracy, consistency, and readability of digital publications. They review and proofread content, check formatting, verify hyperlinks and interactive elements, and ensure compliance with company and industry standards. They also collaborate with authors, editors, and designers to address any issues and implement improvements, ensuring a high-quality product for the end user."
          />
        </div>
      </div>

      {/* Education Part */}
      <div className="w-full lg:w-[50%]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full min-h-[700px] max-h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA in Computer Application"
            subTitle="Bharathiyar University (2020 - 2023)"
            result="Coimbatore"
            des="I chose the School of Distance Education's BCA program because it allows me to balance my studies with my work commitments. The flexible schedule and online coursework enable me to advance my education without compromising my professional responsibilities."
          />
          <ResumeCard
            title="Diploma in Electrical and Electronics Engineering - DEEE"
            subTitle="VSVN Polytechnic College (2016 - 2019)"
            result="Virudhunagar"
            des="The training provided by polytechnic in order to prepare people to work in various sectors of the economy or areas of culture."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
