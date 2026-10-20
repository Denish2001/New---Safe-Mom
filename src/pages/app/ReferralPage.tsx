import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ReferralPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-[#A65E92] font-medium mb-8 transition-colors"
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

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Form */}
        <div className="flex-1 space-y-6">
          {/* Patient Identity Card */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-white flex items-center gap-5 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#A65E92]/10 text-[#A65E92] flex items-center justify-center font-bold text-lg">
              AM
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Referring Patient
              </p>
              <h3 className="text-xl font-bold text-gray-900">Alice Mwangi</h3>
              <p className="text-gray-500 text-sm">28 yrs · 28 wks gestation</p>
            </div>
          </div>

          {/* Destination Details */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Referral Destination
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Facility or Specialist
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92]"
                  placeholder="Search for hospital or specialist..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Urgency
                </label>
                <div className="flex gap-3">
                  {['Routine', 'Within 48 hrs', 'Immediate'].map((level) => (
                    <button
                      key={level}
                      className="flex-1 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:bg-[#A65E92]/10 focus:border-[#A65E92] focus:text-[#A65E92] transition-colors"
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Notes */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Referral Notes
              </h3>
              <span className="text-xs text-gray-400">
                Pre-filled from assessment
              </span>
            </div>
            <textarea
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-4 rounded-xl text-sm leading-relaxed h-40 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] resize-none"
              defaultValue="Patient presents with BP 150/95 mmHg and 2+ proteinuria at 28 weeks gestation. Safe Mom risk model flags 78% likelihood of preeclampsia. Family history of hypertension noted. Requesting specialist evaluation and management plan."
            />
          </div>
        </div>

        {/* Right Column - Sticky Summary */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white sticky top-8 shadow-md">
            <h3 className="text-lg font-bold text-[#A65E92] mb-6 border-b border-gray-100 pb-3">
              Referral Summary
            </h3>

            <div className="space-y-4 text-sm mb-8">
              <div className="flex justify-between items-start">
                <span className="text-gray-500">Facility</span>
                <span className="text-right font-medium text-gray-900">
                  Kenyatta National Hospital
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500">Clinician</span>
                <span className="text-right font-medium text-gray-900">
                  Dr. Njoroge
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500">Urgency</span>
                <span className="text-right font-medium text-red-600">
                  Within 48 hrs
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500">Attachments</span>
                <span className="text-right font-medium text-blue-600 underline cursor-pointer">
                  Assessment PDF
                </span>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 text-gray-600 p-4 rounded-xl text-xs text-center mb-6 leading-relaxed">
              A secure copy of this referral will be sent to the receiving
              facility and saved to the patient record.
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate('/app/placeholder')}
                className="w-full bg-[#A65E92] text-white font-bold py-3 rounded-xl hover:bg-[#8e4d7c] shadow-sm transition-colors"
              >
                Send Referral
              </button>
              <button
                onClick={() => navigate('/app/placeholder')}
                className="w-full bg-white text-gray-600 border border-gray-300 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
