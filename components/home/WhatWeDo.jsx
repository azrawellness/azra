import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatWeDo = ({ services}) => {
  return (
    <div className="  flex flex-wrap justify-evenly  ">
      {services.map((service, index) => (
        <div key={index} className="lg:w-[30rem] relative h-70 mb-[2.5rem]   ">
          <FontAwesomeIcon
            icon={service.icon}
            size="2x"
            fixedWidth
            className="bg-primary shadow text-white px-3 py-4 rounded-full z-50 absolute -top-8 right-8"
          />
          <div className="bg-white shadow rounded p-8 flex flex-col gap-1">
            <div className="font-title text-2xl h-20 ">{service.title}</div>
            <div className="h-36">{service.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
