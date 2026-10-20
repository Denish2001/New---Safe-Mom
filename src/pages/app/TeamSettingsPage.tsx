import React from "react";
import { Link } from "react-router-dom";
import type { TeamMember } from "../../types";

const mockTeam: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Njoroge (you)",
    email: "admin@hospital.org",
    role: "Admin",
  },
  {
    id: "2",
    name: "Grace Kamau",
    email: "grace@hospital.org · Midwife",
    role: "Clinician",
  },
  {
    id: "3",
    name: "Grace Kamau",
    email: "grace2@hospital.org · Midwife",
    role: "Clinician",
  },
  {
    id: "4",
    name: "Grace Kamau",
    email: "grace3@hospital.org · Midwife",
    role: "Pending",
  },
];

const RoleBadge = ({ role }: { role: string }) => {
  const styles =
    role === "Admin"
      ? "bg-purple-50 text-purple-700 border-purple-200"
      : role === "Clinician"
        ? "bg-blue-50 text-blue-700 border-blue-200"
        : "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${styles}`}
    >
      {role}
    </span>
  );
};

export const TeamSettingsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 font-heading mb-1">
            Team Members
          </h1>
          <p className="text-gray-500 font-medium">
            Manage who has access to your facility's dashboard.
          </p>
        </div>
        <Link
          to="/app/settings/team/invite"
          className="bg-[#A65E92] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors flex items-center gap-2 text-sm"
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
          Invite Member
        </Link>
      </div>

      {/* Seat Usage Progress */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-3">
          <p className="font-bold text-gray-900">Facility Pro Seats</p>
          <p className="text-sm font-bold text-[#A65E92]">4 of 13 seats used</p>
        </div>
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-[30%] h-full bg-[#A65E92] rounded-full"></div>
        </div>
      </div>

      {/* Team List */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Member
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockTeam.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-gray-50/50 transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A65E92]/10 text-[#A65E92] flex items-center justify-center font-bold text-sm shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {member.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <RoleBadge role={member.role} />
                    {member.role === "Pending" && (
                      <button className="text-[#A65E92] text-xs font-bold hover:underline">
                        Resend Invite
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  {member.role !== "Admin" ? (
                    <button className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50">
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400 italic px-2 font-medium">
                      Current User
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
