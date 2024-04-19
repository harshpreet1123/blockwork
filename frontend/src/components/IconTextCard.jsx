import React from "react";

const IconTextCard = ({ title, subtitle, icon }) => {
  return (
    <div className="h-full">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src={icon} className="w-10 h-10 mb-3 text-white" />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default IconTextCard;