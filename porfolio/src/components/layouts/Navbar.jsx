import React, { useEffect, useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { FaHome, FaImages } from "react-icons/fa";
import { IoIosInformationCircle, IoIosSettings } from "react-icons/io";
import Button from "../elemets/buttons/Button";

const Navbar = () => {
  // state untuk menyimpan perubahan icon klick humbuger button
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  // klik button
  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  };
  let menuAktif = show ? "left-0" : "-left-full";

  // untuk efek scrol home page
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollAktif = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollAktif}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-2xl font-bold">Ngoding.</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuAktif} top-1/2 -translate-y-1/2 
          flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <FaHome className="text-3xl md:hidden block" />
              <a href="#home" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IoIosInformationCircle className="text-3xl md:hidden block" />
              <a href="#about" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IoIosSettings className="text-3xl md:hidden block" />
              <a href="#services" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaImages className="text-3xl md:hidden block" />
              <a href="#proyek" className="font-medium opacity-75">
                Proyek
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            {/* <a
              href="#social"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Sosial Media
            </a> */}
            <Button
              href="#social"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Sosial Media
            </Button>
            <i>
              <BiAlignRight
                className="text-3xl md:hidden block"
                onClick={handleClick}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
