import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">NambilFadilah</span>
        </p>
        <div className="sosial-footer flex items-center sm:gap-7 gap-2">
          <div className="text-2xl">
            <FaFacebook />{" "}
          </div>
          <i className="text-2xl">
            <FaSquareXTwitter />{" "}
          </i>
          <i className="text-2xl">
            <FaInstagram />{" "}
          </i>
          <i className="text-2xl">
            <FaYoutube />{" "}
          </i>
          <i className="text-2xl">
            <FaLinkedin />{" "}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
