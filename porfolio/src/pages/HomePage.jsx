import React from "react";
import Hero from "../components/layouts/Hero";
import About from "../components/layouts/About";
import Services from "../components/layouts/Services";
import Project from "../components/layouts/Project";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* hero */}
        <Hero />

        {/* about */}
        <About />

        {/* services */}
        <Services />

        {/* proyek */}
        <Project />
      </div>
    </div>
  );
};

export default HomePage;
