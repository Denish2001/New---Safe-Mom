import React from 'react';
import { Link } from 'react-router-dom';
import type { Patient } from '../../types';

// Mock data
const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Alice Mwangi',
    initials: 'AM',
    avatarColor: 'bg-[#D8B4E2] text-[#5B2A6B]',
    weeksPregnant: 28,
    lastSeen: 'today',
    riskLevel: 'Pending',
  },
  {
    id: '2',
    name: 'Jesinta Akinyi',
    initials: 'JA',
    avatarColor: 'bg-[#1A1A2E] text-white',
    weeksPregnant: 34,
    lastSeen: '1 month ago',
    riskLevel: 'Monitor',
  },
  {
    id: '3',
    name: 'Anabelle Kosgei',
    initials: 'AK',
    avatarColor: 'bg-[#D8B4E2] text-[#5B2A6B]',
    weeksPregnant: 28,
    lastSeen: 'today',
    riskLevel: 'Low Risk',
  },
  {
    id: '4',
    name: 'Lucy Moraa',
    initials: 'LM',
    avatarColor: 'bg-[#D8B4E2] text-[#5B2A6B]',
    weeksPregnant: 12,
    lastSeen: 'today',
    riskLevel: 'High Risk',
  },
];

const getRiskBadge = (level: string) => {
  switch (level) {
    case 'Pending':
      return 'bg-gray-100 text-gray-700 border border-gray-200';
    case 'Monitor':
      return 'bg-[#C5B100]/10 text-[#9A8A00] border border-[#C5B100]/20';
    case 'Low Risk':
      return 'bg-green-50 text-green-700 border border-green-200';
    case 'High Risk':
      return 'bg-red-50 text-red-700 border border-red-200';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-[#A65E92] mb-1">
            Good morning, Dr. Njoroge
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Kisumu County Hospital · ANC clinic
          </p>
        </div>
        <Link
          to="/app/assessment/step-1"
          className="bg-[#A65E92] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#8e4d7c] transition-colors shadow-sm"
        >
          + New Assessment
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'New Patients Today', value: '14' },
          { label: 'Pending Review', value: '20' },
          { label: 'High Risk', value: '7', highlight: true },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm"
          >
            <h3 className="font-semibold text-gray-500 mb-2 text-sm uppercase tracking-wide">
              {stat.label}
            </h3>
            <span
              className={`text-4xl font-bold ${stat.highlight ? 'text-red-500' : 'text-[#A65E92]'}`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Patients List */}
      <div>
        <div className="flex justify-between items-end mb-4 px-2">
          <h2 className="text-2xl font-bold text-[#A65E92]">Todays Patients</h2>
          <Link
            to="/app/patients"
            className="text-[#A65E92] text-sm font-semibold hover:underline"
          >
            View All Patients →
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {mockPatients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors group"
            >
              <Link
                to={`/app/patients/${patient.id}`}
                className="flex items-center gap-5 flex-1"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${patient.avatarColor}`}
                >
                  {patient.initials}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#A65E92] transition-colors">
                    {patient.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {patient.weeksPregnant} wks · last seen {patient.lastSeen}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-6">
                <span
                  className={`px-4 py-1.5 rounded-md font-semibold text-xs tracking-wide uppercase ${getRiskBadge(patient.riskLevel)}`}
                >
                  {patient.riskLevel}
                </span>
                <Link
                  to={`/app/patients/${patient.id}`}
                  className="text-gray-400 group-hover:text-[#A65E92] font-medium text-sm transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
