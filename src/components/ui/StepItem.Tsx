import React from "react";
import type { StepProps } from "../../types";

export const StepItem: React.FC<StepProps> = ({
  number,
  title,
  description,
  visual,
  isLast,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center text-center relative px-4 group">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-[40px] left-[50%] w-full h-[2px] bg-gray-200 -z-10 group-hover:bg-[#A65E92]/30 transition-colors duration-300"></div>
      )}

      {/* Number Circle */}
      <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-gray-400 text-3xl font-extrabold mb-8 z-10 shadow-sm group-hover:border-[#A65E92] group-hover:text-[#A65E92] group-hover:scale-105 transition-all duration-300">
        {number}
      </div>

      {/* Visual Card */}
      <div className="bg-white border border-gray-100 p-6 w-full max-w-[280px] aspect-[4/5] flex flex-col justify-center mb-6 shadow-sm rounded-2xl group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A65E92]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {visual}
      </div>

      {/* Text Content */}
      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#A65E92] transition-colors">
        {title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
        {description}
      </p>
    </div>
  );
};
