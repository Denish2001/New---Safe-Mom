import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { AssessmentData } from '../../../types';

const ReviewCard = ({
  title,
  step,
  children,
}: {
  title: string;
  step: number;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white relative group hover:border-[#A65E92]/40 transition-colors shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <button
          onClick={() => navigate(`/app/assessment/step-${step}`)}
          className="text-sm font-semibold text-[#A65E92] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Edit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">{children}</div>
    </div>
  );
};

const DataPoint = ({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) => (
  <div>
    <span className="block text-gray-500 text-xs mb-1 uppercase tracking-wide">
      {label}
    </span>
    <span className="font-medium text-gray-900">{value || '--'}</span>
  </div>
);

export const Step4Review = ({ data }: { data: AssessmentData }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-fade-in">
      <ReviewCard title="Patient Demographics" step={1}>
        <DataPoint label="Name" value={data.fullName} />
        <DataPoint label="Age" value={data.age ? `${data.age} yrs` : '--'} />
        <DataPoint
          label="Gestational Age"
          value={data.gestationalAge ? `${data.gestationalAge} wks` : '--'}
        />
        <DataPoint label="Occupation" value={data.occupation} />
      </ReviewCard>

      <ReviewCard title="Vitals & Lab" step={2}>
        <DataPoint
          label="Blood Pressure"
          value={
            data.systolicBP && data.diastolicBP
              ? `${data.systolicBP}/${data.diastolicBP} mmHg`
              : '--'
          }
        />
        <DataPoint label="Proteinuria" value={data.proteinuria} />
        <DataPoint
          label="Platelets"
          value={data.platelets ? `${data.platelets} x10⁹/L` : '--'}
        />
        <DataPoint
          label="Hemoglobin"
          value={data.hemoglobin ? `${data.hemoglobin} g/dL` : '--'}
        />
      </ReviewCard>

      <ReviewCard title="History & Lifestyle" step={3}>
        <DataPoint
          label="Chronic Hypertension"
          value={data.chronicHypertension ? 'Yes' : 'No'}
        />
        <DataPoint
          label="Family History HTN"
          value={data.familyHistoryHTN ? 'Yes' : 'No'}
        />
        <DataPoint label="Activity Level" value={data.activityLevel} />
        <DataPoint label="Diet Quality" value={data.dietQuality} />
      </ReviewCard>

      <div className="bg-[#A65E92]/5 border border-[#A65E92]/20 text-[#A65E92] p-5 rounded-xl text-sm font-medium flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 shrink-0 mt-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        Double check the highlighted values above — they carry the most weight
        in the prediction.
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          onClick={() => navigate('/app/placeholder')}
          className="px-6 py-2.5 rounded-lg font-bold text-gray-600 hover:bg-gray-100 border border-gray-300 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={() => navigate('/app/assessment/results')}
          className="bg-[#A65E92] text-white px-10 py-3 rounded-lg font-bold hover:bg-[#8e4d7c] shadow-md transition-colors"
        >
          Run Prediction
        </button>
      </div>
    </div>
  );
};
