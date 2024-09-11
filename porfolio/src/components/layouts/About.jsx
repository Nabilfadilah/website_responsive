import React from "react";
import AboutImage from "../../assets/images/about.svg";

const About = () => {
  return (
    <div
      className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32"
      id="about"
    >
      <div className="box md:order-1 order-2">
        <img
          src={AboutImage}
          alt="About Image"
          className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
        />
      </div>
      <div className="box md:order-2 order-1">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Belajar Membuat Website dengan{" "}
          <span className="font-bold text-sky-400 underline">Tailwind CSS</span>{" "}
        </h1>
        <p className="text-base/loose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
          hic perferendis eligendi soluta, ratione vitae accusamus vero quae
          consequuntur expedita dolorum fugit molestias nam, unde debitis
          exercitationem eaque quaerat harum.
        </p>
      </div>
    </div>
  );
};

export default About;
