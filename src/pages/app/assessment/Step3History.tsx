import React from "react";
import { useNavigate } from "react-router-dom";
import type { AssessmentData } from "../../../types";

// Custom Toggle Component
const Toggle = ({
  label,
  desc,
  value,
  onChange,
}: {
  label: string;
  desc: string;
  value: boolean;
  onChange: (val: boolean) => void;
}) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
    <div className="pr-4">
      <p className="font-semibold text-gray-900">{label}</p>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${value ? "bg-[#A65E92]" : "bg-gray-200"}`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${value ? "translate-x-2.5" : "-translate-x-2.5"}`}
      />
    </button>
  </div>
);

export const Step3History = ({
  data,
  update,
}: {
  data: AssessmentData;
  update: (d: Partial<AssessmentData>) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#A65E92] mb-1">
          Medical History
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Existing conditions relevant to preeclampsia risk.
        </p>

        <div className="bg-gray-50/50 rounded-xl border border-gray-100 px-6">
          <Toggle
            label="Chronic hypertension"
            desc="Diagnosed before this pregnancy"
            value={data.chronicHypertension}
            onChange={(v) => update({ chronicHypertension: v })}
          />
          <Toggle
            label="Diabetes"
            desc="Type 1, type 2, or gestational"
            value={data.diabetes}
            onChange={(v) => update({ diabetes: v })}
          />
          <Toggle
            label="Family history of hypertension"
            desc="Parent or sibling"
            value={data.familyHistoryHTN}
            onChange={(v) => update({ familyHistoryHTN: v })}
          />
          <Toggle
            label="Prior preeclampsia"
            desc="In an earlier pregnancy"
            value={data.priorPreeclampsia}
            onChange={(v) => update({ priorPreeclampsia: v })}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#A65E92] mb-1">Lifestyle</h2>
        <p className="text-gray-500 text-sm mb-6">
          Helps the model account for modifiable risk factors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Diet Quality
            </label>
            <select
              value={data.dietQuality}
              onChange={(e) => update({ dietQuality: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92]"
            >
              <option value="">Select</option>
              <option>Balanced</option>
              <option>Poor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Activity Level
            </label>
            <select
              value={data.activityLevel}
              onChange={(e) => update({ activityLevel: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92]"
            >
              <option value="">Select</option>
              <option>Sedentary</option>
              <option>Moderate</option>
              <option>Active</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Sleep (hrs/night)
            </label>
            <input
              type="number"
              value={data.sleepHours}
              onChange={(e) => update({ sleepHours: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92]"
              placeholder="e.g. 8"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
        <button
          onClick={() => navigate("/app/assessment/step-2")}
          className="px-6 py-2.5 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/app/assessment/step-4")}
          className="bg-[#A65E92] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors"
        >
          Continue to Review
        </button>
      </div>
    </div>
  );
};
