import React from "react";
import { FaEye } from "react-icons/fa";
import HeroImage from "../../assets/images/hero.svg";
import Button from "../elemets/buttons/Button";

const Hero = () => {
  return (
    <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
      <div className="box">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Belajar Membuat Website dengan{" "}
          <span className="font-bold text-sky-400 underline">Tailwind CSS</span>{" "}
        </h1>
        <p className="text-base/8 mb-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
          hic perferendis eligendi soluta, ratione vitae accusamus vero quae
          consequuntur expedita dolorum fugit molestias nam, unde debitis
          exercitationem eaque quaerat harum.
        </p>
        {/* kita ganti dengan button custom */}
        <Button
          href="#about"
          className="inline-flex items-center bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
        >
          Tentang Kami <FaEye className="ml-2" />
        </Button>
        {/* <a
          href="#about"
          className="inline-flex items-center bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
        >
          Tentang Kami <FaEye className="ml-2" />
        </a> */}
      </div>
      <div className="box">
        <img
          src={HeroImage}
          alt="Hero Image"
          className="md:w-full w-[400px] mx-auto md:m-0"
        />
      </div>
    </div>
  );
};

export default Hero;
