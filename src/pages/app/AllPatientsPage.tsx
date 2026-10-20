import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Mock data for the table
const PATIENTS = [
  {
    id: "1",
    name: "Alice Mwangi",
    initials: "AM",
    age: 28,
    gestation: 28,
    lastVisit: "Today",
    risk: "High",
    color: "bg-red-100 text-red-700",
  },
  {
    id: "2",
    name: "Jesinta Akinyi",
    initials: "JA",
    age: 34,
    gestation: 34,
    lastVisit: "1 week ago",
    risk: "Monitor",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "3",
    name: "Anabelle Kosgei",
    initials: "AK",
    age: 24,
    gestation: 12,
    lastVisit: "Today",
    risk: "Low",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "4",
    name: "Lucy Moraa",
    initials: "LM",
    age: 31,
    gestation: 22,
    lastVisit: "3 days ago",
    risk: "Low",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "5",
    name: "Mary Wambui",
    initials: "MW",
    age: 29,
    gestation: 18,
    lastVisit: "2 weeks ago",
    risk: "Monitor",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const RiskBadge = ({ risk }: { risk: string }) => {
  const styles =
    risk === "High"
      ? "bg-red-50 text-red-700 border-red-200"
      : risk === "Monitor"
        ? "bg-yellow-50 text-yellow-700 border-yellow-200"
        : "bg-green-50 text-green-700 border-green-200";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${styles}`}
    >
      {risk}
    </span>
  );
};

export const AllPatientsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 font-heading mb-1">
            All Patients
          </h1>
          <p className="text-gray-500 font-medium">
            142 patients · Kisumu County Hospital
          </p>
        </div>
        <Link
          to="/app/assessment/step-1"
          className="bg-[#A65E92] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#8e4d7c] transition-colors shadow-sm flex items-center gap-2 w-fit"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          New Assessment
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Total Patients",
            value: "142",
            icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
            color: "text-gray-900",
          },
          {
            label: "High Risk",
            value: "11",
            icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
            color: "text-red-600",
          },
          {
            label: "Monitor",
            value: "23",
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            color: "text-yellow-600",
          },
          {
            label: "Low Risk",
            value: "108",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            color: "text-green-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-center justify-between"
          >
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {stat.label}
              </h3>
              <span
                className={`text-2xl font-extrabold font-heading ${stat.color}`}
              >
                {stat.value}
              </span>
            </div>
            <div
              className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${stat.color}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={stat.icon}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-sm flex flex-col md:flex-row gap-2 mb-6">
        <div className="flex-1 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by patient name or ID..."
            className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none focus:ring-0 text-sm placeholder-gray-400"
          />
        </div>
        <div className="flex gap-2 md:border-l border-gray-200 md:pl-2">
          <select className="bg-gray-50 border-none text-sm font-medium text-gray-700 rounded-lg px-4 py-2.5 focus:ring-0 cursor-pointer">
            <option>All Risk Levels</option>
            <option>High Risk</option>
            <option>Monitor</option>
            <option>Low Risk</option>
          </select>
          <select className="bg-gray-50 border-none text-sm font-medium text-gray-700 rounded-lg px-4 py-2.5 focus:ring-0 cursor-pointer">
            <option>Sort: Recent</option>
            <option>Sort: Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Premium Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50/80 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Gestation
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Risk Level
              </th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {PATIENTS.map((patient) => (
              // ENTIRE ROW IS CLICKABLE
              <tr
                key={patient.id}
                onClick={() => navigate(`/app/patients/${patient.id}`)}
                className="group hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A65E92]/10 text-[#A65E92] flex items-center justify-center font-bold text-sm shrink-0">
                      {patient.initials}
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-[#A65E92] transition-colors">
                      {patient.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600 font-medium">
                  {patient.age}
                </td>
                <td className="px-6 py-4 text-gray-600 font-medium">
                  {patient.gestation} wks
                </td>
                <td className="px-6 py-4 text-gray-600 font-medium">
                  {patient.lastVisit}
                </td>
                <td className="px-6 py-4">
                  <RiskBadge risk={patient.risk} />
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="text-gray-400 group-hover:text-[#A65E92] font-bold text-sm transition-colors flex items-center justify-end gap-1">
                    View
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 font-medium">
          Showing 1 to 5 of 142 patients
        </p>
        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50"
            disabled
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-lg bg-[#A65E92] text-white font-bold text-sm shadow-sm">
            1
          </button>
          <button className="w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 font-bold text-sm transition-colors">
            2
          </button>
          <button className="w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 font-bold text-sm transition-colors">
            3
          </button>
          <button className="w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 font-bold text-sm transition-colors">
            4
          </button>
          <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
