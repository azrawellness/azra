import React from "react";
import {
  faCirclePlay,
  faHandHoldingHeart,
  faPerson,
  faClockRotateLeft,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Metrics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 border-gray mt-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray">
      <div className="flex p-4">
        <div className="w-1/6">
          <FontAwesomeIcon className="text-primary" size="2x" icon={faPerson} />
        </div>
        <div className="w-5/6">
          <div className="font-title text-3xl">830+</div>
          <div className="font-title text-2xl">
            Successfully Managed PCOS Cases
          </div>
        </div>
      </div>
      <div className="flex p-4">
        <div className="w-1/6">
          <FontAwesomeIcon
            className="text-primary"
            size="2x"
            icon={faHandHoldingHeart}
          />
        </div>
        <div className="w-5/6">
          <div className="font-title text-3xl">5600</div>
          <div className="font-title text-2xl">
            Successfully Managed Hypertension, Thyroid & Diabetes Cases
          </div>
        </div>
      </div>
      <div className="flex p-4">
        <div className="w-1/6">
          <FontAwesomeIcon
            className="text-primary"
            size="2x"
            icon={faFaceSmile}
          />
        </div>
        <div className="w-5/6">
          <div className="font-title text-3xl">100%</div>
          <div className="font-title text-2xl"> Customer Satisfaction Rate</div>
        </div>
      </div>
      <div className="flex p-4">
        <div className="w-1/6">
          <FontAwesomeIcon
            className="text-primary"
            size="2x"
            icon={faClockRotateLeft}
          />
        </div>
        <div className="w-5/6">
          <div className="font-title text-3xl">24×7 </div>
          <div className="font-title text-2xl">
            Access for Queries and Weekly Follow-ups
          </div>
        </div>
      </div>
    </div>
  );
};
