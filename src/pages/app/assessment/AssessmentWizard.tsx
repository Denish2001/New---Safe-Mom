import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import type { AssessmentData } from '../../../types';
import { Step1Demographics } from './Step1Demographics';
import { Step2Vitals } from './Step2Vitals';
import { Step3History } from './Step3History';
import { Step4Review } from './Step4Review';
import { ResultsPage } from './ResultsPage';

const initialData: AssessmentData = {
  fullName: '',
  age: '',
  gestationalAge: '',
  occupation: '',
  height: '',
  weight: '',
  systolicBP: '',
  diastolicBP: '',
  proteinuria: '',
  fetalHeartRate: '',
  hemoglobin: '',
  pcv: '',
  platelets: '',
  cystatinC: '',
  pigfRatio: '',
  creatinine: '',
  pp13: '',
  glycerides: '',
  chronicHypertension: false,
  diabetes: false,
  familyHistoryHTN: false,
  priorPreeclampsia: false,
  dietQuality: '',
  activityLevel: '',
  sleepHours: '',
};

const STEPS = [
  { id: 1, label: 'Demographics', path: 'step-1' },
  { id: 2, label: 'Vitals & Lab', path: 'step-2' },
  { id: 3, label: 'History & Lifestyle', path: 'step-3' },
  { id: 4, label: 'Review & Run', path: 'step-4' },
];

export const AssessmentWizard: React.FC = () => {
  const [formData, setFormData] = useState<AssessmentData>(initialData);
  const navigate = useNavigate();
  const location = useLocation();

  const updateFormData = (fields: Partial<AssessmentData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const currentPath = location.pathname.split('/').pop();

  // If on results page, render just the results component
  if (currentPath === 'results') {
    return <ResultsPage data={formData} />;
  }

  // Find the current step index based on URL
  const currentStepIndex = STEPS.findIndex((s) => s.path === currentPath);
  const currentStep =
    currentStepIndex !== -1 ? STEPS[currentStepIndex] : STEPS[0];

  return (
    <div className="max-w-6xl mx-auto py-8 px-6 md:px-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate('/app')}
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
          Back to Dashboard
        </button>
        <span className="text-gray-400 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
          Step {currentStep.id} of 4
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">New Assessment</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar Navigation */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="sticky top-8 space-y-2">
            {STEPS.map((step) => {
              const isActive = currentStep.id === step.id;
              const isCompleted = currentStep.id > step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => navigate(`/app/assessment/${step.path}`)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#A65E92] text-white shadow-md'
                      : isCompleted
                        ? 'bg-green-50 text-green-700 hover:bg-green-100'
                        : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 ${
                      isActive
                        ? 'border-white bg-white/20'
                        : isCompleted
                          ? 'border-green-600 bg-green-600 text-white'
                          : 'border-gray-300'
                    }`}
                  >
                    {isCompleted ? '✓' : step.id}
                  </div>
                  {step.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Form Area */}
        <div className="flex-1 min-w-0">
          <Routes>
            <Route
              path="step-1"
              element={
                <Step1Demographics data={formData} update={updateFormData} />
              }
            />
            <Route
              path="step-2"
              element={<Step2Vitals data={formData} update={updateFormData} />}
            />
            <Route
              path="step-3"
              element={<Step3History data={formData} update={updateFormData} />}
            />
            <Route path="step-4" element={<Step4Review data={formData} />} />
            <Route
              path="*"
              element={
                <Step1Demographics data={formData} update={updateFormData} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
