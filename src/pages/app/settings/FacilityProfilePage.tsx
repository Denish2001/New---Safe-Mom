import React from 'react';
import { SettingsLayout, SettingsInput } from './SettingsLayout';

export const FacilityProfilePage: React.FC = () => {
  return (
    <SettingsLayout
      title="Facility profile"
      description="Manage your facility's information and contact details."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Profile saved (Mock)');
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
          <SettingsInput
            label="Facility Name"
            defaultValue="Kisumu County Hospital"
          />
          <SettingsInput
            label="Facility Type"
            defaultValue="County Referral Hospital"
          />
          <SettingsInput label="County" defaultValue="Kisumu" />
          <SettingsInput label="Sub-County" defaultValue="Kisumu Central" />
        </div>

        <div className="border-t border-gray-100 pt-8 mt-4 mb-8">
          <h3 className="text-lg font-bold text-gray-900 font-heading mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            <SettingsInput
              label="Primary Contact Email"
              defaultValue="admin@kisumuhospital.org"
              type="email"
            />
            <SettingsInput
              label="Phone Number"
              defaultValue="+254 700 000 000"
            />
            <div className="md:col-span-2">
              <SettingsInput
                label="Physical Address"
                defaultValue="P.O Box 1234, Kisumu"
                isTextArea
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
          <button
            type="button"
            className="px-6 py-2.5 border border-gray-300 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#A65E92] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </SettingsLayout>
  );
};
