import React from "react";
import { Navbar } from "./components/navBar/navbar";
import { Banner } from "./components/banner";
import { Features } from "./components/features/feature";
import { Projects } from "./components/projects/project";
import { Resume } from "./components/resume/resume";
import { TestimonialSlider } from "./components/testimonial/testimonial";

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default App;
