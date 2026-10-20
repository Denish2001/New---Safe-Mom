import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Invitee } from "../../types";

export const InviteTeamPage: React.FC = () => {
  const navigate = useNavigate();
  const [invitees, setInvitees] = useState<Invitee[]>([
    { id: "1", email: "grace@hospital.org", role: "Admin" },
    { id: "2", email: "grace2@hospital.org", role: "Clinician" },
    { id: "3", email: "", role: "Viewer" },
  ]);

  const handleAdd = () => {
    setInvitees([
      ...invitees,
      { id: Date.now().toString(), email: "", role: "Clinician" },
    ]);
  };

  const handleRemove = (id: string) => {
    setInvitees(invitees.filter((i) => i.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/app/settings/team")}
          className="flex items-center gap-2 text-gray-500 hover:text-[#A65E92] font-medium mb-4 transition-colors"
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Team
        </button>
        <h1 className="text-3xl font-extrabold text-gray-900 font-heading mb-1">
          Invite Team Members
        </h1>
        <p className="text-gray-500 font-medium">
          Add clinicians and administrators to your facility.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Form */}
        <div className="flex-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-gray-900">Add People</h2>
              <span className="bg-[#A65E92]/10 text-[#A65E92] px-3 py-1 rounded-full text-xs font-bold">
                9 seats remaining
              </span>
            </div>

            <div className="space-y-4 mb-8">
              {invitees.map((invitee, index) => (
                <div
                  key={invitee.id}
                  className="flex flex-col md:flex-row gap-3 items-start md:items-center"
                >
                  <div className="flex-1 w-full relative">
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      type="email"
                      value={invitee.email}
                      placeholder={`email${index + 1}@hospital.org`}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
                    />
                  </div>

                  <div className="w-full md:w-48 relative">
                    <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-gray-700 focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all cursor-pointer">
                      <option>Admin</option>
                      <option>Clinician</option>
                      <option>Viewer</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>

                  <button
                    onClick={() => handleRemove(invitee.id)}
                    className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors shrink-0"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleAdd}
              className="w-full border-2 border-dashed border-[#A65E92]/30 rounded-xl p-3 text-[#A65E92] font-bold text-sm hover:bg-[#A65E92]/5 hover:border-[#A65E92]/50 transition-all flex items-center justify-center gap-2"
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
              Add Another
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={() => navigate("/app/settings/team")}
              className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => navigate("/app/settings/team")}
              className="bg-[#A65E92] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#8e4d7c] shadow-md transition-colors"
            >
              Send Invites
            </button>
          </div>
        </div>

        {/* Right Column - Info */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
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
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              Role Permissions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Admin</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Manage team, billing, and all patient data across the
                  facility.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">
                  Clinician
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Run assessments, view records, and refer their own patients.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Viewer</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Read-only access to patient records and risk scores.
                </p>
              </div>
            </div>
          </div>

          {/* Pending Invites Summary */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Pending Invites</h3>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Currently pending</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold">
                1 Invite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
