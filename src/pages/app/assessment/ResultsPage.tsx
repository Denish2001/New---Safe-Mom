import React from "react";
import { useNavigate } from "react-router-dom";
import type { AssessmentData } from "../../../types";

export const ResultsPage = ({ data }: { data: AssessmentData }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate("/app/assessment/step-4")}
          className="flex items-center gap-2 text-gray-500 hover:text-[#A65E92] font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Return to Results
        </button>
        <span className="bg-[#A65E92]/10 text-[#A65E92] px-4 py-1.5 rounded-full text-sm font-bold">
          {data.fullName || "Patient"} · {data.gestationalAge || "--"} wks ·
          Assessed just now
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Assessment complete
      </h1>
      <h2 className="text-2xl font-bold text-[#A65E92] mb-8">
        Results & recommendations
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Score Card */}
        <div className="w-full md:w-1/3 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          {/* Circular Gauge Mock */}
          <div className="relative w-40 h-40 mb-6">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#F3F4F6"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#A65E92"
                strokeWidth="8"
                strokeDasharray="282.7"
                strokeDashoffset="62.2"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-4xl font-extrabold text-[#A65E92]">
                78%
              </span>
            </div>
          </div>
          <p className="font-bold text-gray-900 mb-1">
            Likelihood of preeclampsia
          </p>
          <span className="text-red-600 font-bold bg-red-50 px-4 py-1 rounded-full text-sm mt-2 border border-red-100">
            High risk
          </span>
        </div>

        {/* Factors Card */}
        <div className="w-full md:w-2/3 bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
            Top contributing factors
          </h3>
          <div className="space-y-6">
            {[
              {
                label: "Blood pressure",
                value: `${data.systolicBP || 150}/${data.diastolicBP || 95} mmHg`,
                width: "w-full",
                color: "bg-red-500",
              },
              {
                label: "Proteinuria",
                value: data.proteinuria || "2+",
                width: "w-4/5",
                color: "bg-orange-500",
              },
              {
                label: "Family history HTN",
                value: data.familyHistoryHTN ? "Present" : "Absent",
                width: "w-1/2",
                color: "bg-yellow-500",
              },
              {
                label: "Fetal heart rate",
                value: "Normal",
                width: "w-1/3",
                color: "bg-green-500",
              },
            ].map((factor, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold text-gray-700">
                    {factor.label}
                  </span>
                  <span className="font-medium text-gray-900">
                    {factor.value}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${factor.width} ${factor.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations Card */}
      <div className="border border-[#A65E92]/20 rounded-2xl p-8 bg-[#A65E92]/5 mb-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#A65E92] mb-6">
          Recommended Actions
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
              !
            </div>
            <div>
              <h4 className="font-bold text-gray-900">
                Refer to specialist within 48 hours
              </h4>
              <p className="text-gray-600 text-sm mt-0.5">
                Elevated BP + proteinuria meet referral threshold.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-gray-900">
                Increase monitoring to weekly visits
              </h4>
              <p className="text-gray-600 text-sm mt-0.5">
                Up from the standard monthly schedule.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-gray-900">
                Consider low-dose aspirin
              </h4>
              <p className="text-gray-600 text-sm mt-0.5">
                Per clinical guidelines, may lower risk by ~15%.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mb-8 italic">
        Model output supports — not replaces — clinical judgment.
      </p>

      {/* Actions */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={() => navigate("/app/placeholder")}
          className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
          Print Report
        </button>
        <button
          onClick={() => navigate("/app/placeholder")}
          className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          Save to Records
        </button>
        <button
          onClick={() => navigate("/app/referral")}
          className="flex items-center justify-center gap-2 bg-[#A65E92] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#8e4d7c] shadow-md transition-colors"
        >
          Refer Patient
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
