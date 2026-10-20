import React from "react";
import { SettingsLayout } from "./SettingsLayout";

export const DataPrivacyPage: React.FC = () => {
  return (
    <SettingsLayout
      title="Data & privacy"
      description="Manage your data, export records, and review privacy settings."
    >
      <div className="space-y-8">
        {/* Data Export */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-gray-200 rounded-lg">
          <div className="mb-4 md:mb-0 max-w-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Export Patient Data
            </h3>
            <p className="text-sm text-gray-600">
              Download a complete, secure CSV file containing all patient
              demographics, vitals, and assessment history linked to your
              facility.
            </p>
          </div>
          <button className="px-6 py-2 border border-[#A65E92] text-[#A65E92] rounded font-bold hover:bg-gray-50 transition-colors whitespace-nowrap">
            Request Export
          </button>
        </div>

        {/* Compliance Info */}
        <div className="p-6 bg-[#F8F5F8] rounded-lg border border-[#A65E92]/30">
          <h3 className="text-lg font-bold text-[#A65E92] mb-2">
            Kenya Data Protection Act, 2019
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            SafeMom is fully compliant with the Kenya Data Protection Act. All
            patient data is encrypted at rest (AES-256) and in transit (TLS
            1.3). We do not share patient data with third parties without
            explicit consent.
          </p>
          <a
            href="#"
            className="text-[#A65E92] font-semibold text-sm hover:underline"
          >
            Read our full Privacy Policy →
          </a>
        </div>

        {/* Danger Zone */}
        <div className="p-6 border border-red-200 bg-red-50 rounded-lg">
          <h3 className="text-lg font-bold text-red-700 mb-1">Danger Zone</h3>
          <p className="text-sm text-red-600 mb-4">
            Permanently delete your facility account and all associated patient
            records. This action cannot be undone.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition-colors">
            Delete Facility Account
          </button>
        </div>
      </div>
    </SettingsLayout>
  );
};
