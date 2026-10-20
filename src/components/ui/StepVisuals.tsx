export const LoginVisual = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full max-w-sm mx-auto">
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
      <div className="w-8 h-8 bg-[#A65E92]/10 rounded-full flex items-center justify-center text-[#A65E92] font-bold text-xs">
        SM
      </div>
      <div className="text-sm font-bold text-gray-900">Clinician Portal</div>
    </div>
    <div className="space-y-4">
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-1">
          Clinician ID
        </div>
        <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3">
          <span className="text-sm text-gray-400">admin@hospital.org</span>
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-1">Password</div>
        <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3">
          <span className="text-sm text-gray-400">••••••••</span>
        </div>
      </div>
      <div className="h-10 bg-[#A65E92] rounded-lg mt-2 flex items-center justify-center">
        <span className="text-white font-bold text-sm">Secure Login</span>
      </div>
    </div>
  </div>
);

export const VitalsVisual = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full max-w-sm mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h4 className="text-sm font-bold text-gray-900">Enter Vitals</h4>
      <span className="text-xs font-bold text-[#A65E92] bg-[#A65E92]/10 px-2 py-1 rounded">
        Step 2 of 4
      </span>
    </div>
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1">
          <div className="text-xs font-semibold text-gray-500 mb-1">
            Systolic BP
          </div>
          <div className="h-10 bg-white border border-[#A65E92] rounded-lg flex items-center px-3 shadow-[0_0_0_1px_rgba(166,94,146,0.2)]">
            <span className="text-sm font-bold text-gray-900">140</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold text-gray-500 mb-1">
            Diastolic BP
          </div>
          <div className="h-10 bg-white border border-[#A65E92] rounded-lg flex items-center px-3 shadow-[0_0_0_1px_rgba(166,94,146,0.2)]">
            <span className="text-sm font-bold text-gray-900">90</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-1">
          Proteinuria
        </div>
        <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between px-3">
          <span className="text-sm text-gray-900">2+</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export const RiskScoreVisual = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full max-w-sm mx-auto">
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 border-4 border-red-100 mb-3">
        <span className="text-2xl font-extrabold text-red-600">78%</span>
      </div>
      <h4 className="text-sm font-bold text-gray-900">High Risk Detected</h4>
      <p className="text-xs text-gray-500 mt-1">Preeclampsia likelihood</p>
    </div>
    <div className="space-y-3 border-t border-gray-100 pt-4">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
          !
        </div>
        <span className="text-xs font-semibold text-gray-800">
          Refer within 48 hours
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-xs font-bold">
          2
        </div>
        <span className="text-xs font-semibold text-gray-800">
          Increase monitoring
        </span>
      </div>
    </div>
  </div>
);
