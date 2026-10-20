import React from "react";
import { useNavigate } from "react-router-dom";
import type { AssessmentData } from "../../../types";

// Reusable input component for this file
const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all bg-gray-50/50 focus:bg-white"
    />
  </div>
);

export const Step1Demographics = ({
  data,
  update,
}: {
  data: AssessmentData;
  update: (d: Partial<AssessmentData>) => void;
}) => {
  const navigate = useNavigate();

  const bmi =
    data.height && data.weight
      ? (Number(data.weight) / Math.pow(Number(data.height) / 100, 2)).toFixed(
          1,
        )
      : null;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 animate-fade-in">
      <div className="mb-8 border-b border-gray-100 pb-6">
        <h2 className="text-2xl font-bold text-[#A65E92] mb-1">
          Patient Demographics
        </h2>
        <p className="text-gray-500 text-sm">
          Basic details used alongside vitals for prediction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
        <InputField
          label="Full Name"
          placeholder="e.g. Alice Mwangi"
          value={data.fullName}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => update({ fullName: e.target.value })}
        />
        <InputField
          label="Age (years)"
          type="number"
          placeholder="e.g. 28"
          value={data.age}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => update({ age: e.target.value })}
        />
        <InputField
          label="Gestational Age (weeks)"
          type="number"
          placeholder="e.g. 28"
          value={data.gestationalAge}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => update({ gestationalAge: e.target.value })}
        />

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Occupation
          </label>
          <select
            value={data.occupation}
            onChange={(e) => update({ occupation: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
          >
            <option value="">Select Occupation</option>
            <option>Teacher</option>
            <option>Nurse</option>
            <option>Farmer</option>
            <option>Business owner</option>
          </select>
        </div>

        <InputField
          label="Height (cm)"
          type="number"
          placeholder="e.g. 165"
          value={data.height}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => update({ height: e.target.value })}
        />
        <InputField
          label="Weight (kg)"
          type="number"
          placeholder="e.g. 68"
          value={data.weight}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => update({ weight: e.target.value })}
        />
      </div>

      {/* BMI Display */}
      <div
        className={`p-4 rounded-xl flex items-center justify-between border ${bmi ? "bg-[#A65E92]/5 border-[#A65E92]/20" : "bg-gray-50 border-gray-200"}`}
      >
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={bmi ? "#A65E92" : "#9CA3AF"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            Calculated BMI
          </span>
        </div>
        <span className="text-xl font-bold text-[#A65E92]">{bmi || "--"}</span>
      </div>

      <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
        <button
          onClick={() => navigate("/app/placeholder")}
          className="px-6 py-2.5 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={() => navigate("/app/assessment/step-2")}
          className="bg-[#A65E92] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors"
        >
          Continue to Vitals
        </button>
      </div>
    </div>
  );
};
