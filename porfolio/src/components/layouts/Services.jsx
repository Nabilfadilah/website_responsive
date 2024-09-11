import React from "react";
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";

const Services = () => {
  return (
    <div className="services pt-32" id="services">
      <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
        Layanan
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="box bg-sky-400 rounded-lg shadow p-4">
          <TbNumber1 className="text-3xl text-white" />
          <h3 className="text-xl font-bold text-white mt-6 mb-2">
            Services Name 1
          </h3>
          <p className="text-white text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nostrum aut sequi nemo, vero sapiente.
          </p>
        </div>
        <div className="box box bg-sky-400 rounded-lg shadow p-4">
          <TbNumber2 className="text-3xl text-white" />
          <h3 className="text-xl font-bold text-white mt-6 mb-2">
            Services Name 2
          </h3>
          <p className="text-white text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nostrum aut sequi nemo, vero sapiente.
          </p>
        </div>
        <div className="box box bg-sky-400 rounded-lg shadow p-4">
          <TbNumber3 className="text-3xl text-white" />
          <h3 className="text-xl font-bold text-white mt-6 mb-2">
            Services Name 3
          </h3>
          <p className="text-white text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nostrum aut sequi nemo, vero sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
