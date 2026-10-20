import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const PatientProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      {/* Top Navigation & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <button
          onClick={() => navigate('/app/patients')}
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
          Back to All Patients
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/app/placeholder')}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Export Data
          </button>
          <Link
            to="/app/assessment/step-1"
            className="bg-[#A65E92] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors flex items-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            New Assessment
          </Link>
        </div>
      </div>

      {/* Patient Identity Header */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 bg-[#A65E92]/10 text-[#A65E92] rounded-full flex items-center justify-center text-4xl font-extrabold shadow-inner shrink-0">
          AM
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 font-heading mb-1">
            Alice Mwangi
          </h1>
          <p className="text-gray-500 font-medium">Patient ID: #SM-4921</p>
        </div>

        {/* Quick Stats Grid inside header */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 w-full md:w-auto mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-12">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Age
            </p>
            <p className="text-xl font-bold text-gray-900">
              28 <span className="text-sm text-gray-500 font-medium">yrs</span>
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Gestation
            </p>
            <p className="text-xl font-bold text-gray-900">
              28 <span className="text-sm text-gray-500 font-medium">wks</span>
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Current Risk
            </p>
            <p className="text-xl font-bold text-red-600">78% High</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Chart & History) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Risk Trend Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-heading mb-1">
                  Risk Trend
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  Score progression across 4 antenatal visits
                </p>
              </div>
              <select className="bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 rounded-lg px-3 py-1.5 focus:ring-0">
                <option>Last 4 visits</option>
                <option>All time</option>
              </select>
            </div>

            {/* SVG Graph - Elevated */}
            <div className="relative h-64 w-full mt-4">
              {/* Y-axis labels & Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 font-medium pb-8">
                <div className="flex items-center w-full">
                  <span className="w-8">100</span>
                  <div className="flex-1 border-t border-dashed border-gray-200"></div>
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8">75</span>
                  <div className="flex-1 border-t border-dashed border-gray-200"></div>
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8">50</span>
                  <div className="flex-1 border-t border-dashed border-gray-200"></div>
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8">25</span>
                  <div className="flex-1 border-t border-dashed border-gray-200"></div>
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8">0</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>
              </div>

              {/* The Chart Line & Points */}
              <svg
                className="absolute inset-0 w-full h-full pl-8 pb-8"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Gradient Fill under the line */}
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#A65E92" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#A65E92" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Area Fill */}
                <path
                  d="M10,90 L35,60 L60,30 L90,15 L90,100 L10,100 Z"
                  fill="url(#chartGradient)"
                />

                {/* Line */}
                <path
                  d="M10,90 L35,60 L60,30 L90,15"
                  fill="none"
                  stroke="#A65E92"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                <circle
                  cx="10"
                  cy="90"
                  r="3"
                  fill="#fff"
                  stroke="#A65E92"
                  strokeWidth="2"
                />
                <circle
                  cx="35"
                  cy="60"
                  r="3"
                  fill="#fff"
                  stroke="#A65E92"
                  strokeWidth="2"
                />
                <circle
                  cx="60"
                  cy="30"
                  r="3"
                  fill="#fff"
                  stroke="#A65E92"
                  strokeWidth="2"
                />
                <circle
                  cx="90"
                  cy="15"
                  r="4"
                  fill="#A65E92"
                  className="animate-pulse"
                />
              </svg>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 font-bold pr-2">
                <span>wk 12</span>
                <span>wk 18</span>
                <span>wk 24</span>
                <span>wk 28 (Current)</span>
              </div>
            </div>
          </div>

          {/* Visit History */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 font-heading">
                Visit History
              </h2>
              <button className="text-sm font-bold text-[#A65E92] hover:underline">
                View All Records
              </button>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider text-xs">
                    Date
                  </th>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider text-xs">
                    BP
                  </th>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider text-xs">
                    Protein
                  </th>
                  <th className="px-6 py-3 font-bold text-gray-500 uppercase tracking-wider text-xs">
                    Risk
                  </th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3].map((item) => (
                  <tr
                    key={item}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      28 Sep 2026
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      150/95
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">2+</td>
                    <td className="px-6 py-4">
                      <span className="bg-red-50 text-red-700 border border-red-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        High
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => navigate('/app/placeholder')}
                        className="text-[#A65E92] font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column (Quick Actions / Notes) */}
        <div className="space-y-6">
          <div className="bg-[#A65E92]/5 border border-[#A65E92]/20 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[#A65E92]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Clinical Alert
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Patient is currently flagged as{' '}
              <strong className="text-red-600">High Risk</strong> for
              preeclampsia based on elevated BP and proteinuria.
            </p>
            <button
              onClick={() => navigate('/app/referral')}
              className="w-full bg-white border border-[#A65E92] text-[#A65E92] font-bold py-2 rounded-lg hover:bg-[#A65E92] hover:text-white transition-colors text-sm"
            >
              Create Referral
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Recent Notes</h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-[#A65E92]"></div>
                <p className="text-xs font-bold text-gray-400 mb-1">
                  Today, 09:30 AM
                </p>
                <p className="text-sm text-gray-700">
                  Vitals recorded. BP elevated. Advised patient to reduce salt
                  intake and rest.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-gray-300"></div>
                <p className="text-xs font-bold text-gray-400 mb-1">
                  Sep 28, 2026
                </p>
                <p className="text-sm text-gray-700">
                  Routine antenatal visit. All lab results within normal ranges
                  except mild proteinuria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
