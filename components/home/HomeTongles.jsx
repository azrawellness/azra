import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
export const HomeTongles = () => {
  return (
    <div className="   fixed top-[35vh] md:top-[77vh] z-[200] right-0  flex flex-col gap-1 overflow-hidden ">
      <div className=" bg-primary  w-[20rem] h-[3rem] flex items-center toggles">
        <div className="bg-secondary h-[100%]  w-[20%] flex justify-center items-center toggleicons">
          {" "}
          <FontAwesomeIcon
            icon="fa-solid fa-phone"
            className="text-white text-[2rem]"
          />
        </div>
        <button className="w-[80%] text-white font-semibold text-lg text-center">
          <a href="tel: 09899191936"> Call me</a>
        </button>
      </div>
      <div className="bg-primary w-[20rem] h-[3rem] flex items-center toggles">
        <div className="bg-secondary h-[100%] w-[20%] flex justify-center items-center">
          {" "}
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-white text-[2rem]"
          />
        </div>
        <button className="w-[80%] text-white font-semibold text-lg text-center">
          <a href="#contact-form">Book An Appointment Now</a>
        </button>
      </div>
      <div className="bg-primary w-[20rem] h-[3rem] flex items-center toggles">
        <div className="bg-secondary h-[100%] w-[20%] flex justify-center items-center">
          {" "}
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-white text-[2rem]"
          />
        </div>
        <button className="w-[80%] text-white font-semibold text-lg text-center">
          <a href="https://wa.me/09899191936">Live Chat on Whatsapp</a>
        </button>
      </div>
    </div>
  );
};
