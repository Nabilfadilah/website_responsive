import React from "react";
import Proyek1 from "../../assets/images/proyek-1.webp";
import Proyek2 from "../../assets/images/proyek-2.webp";
import Proyek3 from "../../assets/images/proyek-3.webp";
import Proyek4 from "../../assets/images/proyek-4.webp";
import Proyek5 from "../../assets/images/proyek-5.webp";

const Project = () => {
  return (
    <div className="proyek pt-32" id="proyek">
      <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
        Proyek
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="box p-2 bg-white shadow">
          <img src={Proyek1} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold text-black mt-6 mb-2">
            Proyek Name 1
          </h3>
          <p className=" text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            cupiditate labore dolore rerum natus error.
          </p>
        </div>

        <div className="box p-2 bg-white shadow">
          <img src={Proyek2} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold text-black te mt-6 mb-2">
            Proyek Name 2
          </h3>
          <p className=" text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            cupiditate labore dolore rerum natus error.
          </p>
        </div>

        <div className="box p-2 bg-white shadow">
          <img src={Proyek3} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold text-black mt-6 mb-2">
            Proyek Name 3
          </h3>
          <p className=" text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            cupiditate labore dolore rerum natus error.
          </p>
        </div>

        <div className="box p-2 bg-white shadow">
          <img src={Proyek4} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold text-black mt-6 mb-2">
            Proyek Name 4
          </h3>
          <p className=" text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            cupiditate labore dolore rerum natus error.
          </p>
        </div>

        <div className="box p-2 bg-white shadow">
          <img src={Proyek5} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold text-black mt-6 mb-2">
            Proyek Name 5
          </h3>
          <p className=" text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            cupiditate labore dolore rerum natus error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
