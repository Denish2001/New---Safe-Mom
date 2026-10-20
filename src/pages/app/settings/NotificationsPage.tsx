import React from "react";
import { SettingsLayout } from "./SettingsLayout";

const ToggleSwitch: React.FC<{
  label: string;
  description: string;
  defaultChecked?: boolean;
}> = ({ label, description, defaultChecked }) => (
  <div className="flex items-center justify-between py-6 border-b border-gray-100 last:border-0">
    <div className="pr-8">
      <h4 className="font-semibold text-gray-900 text-sm mb-1">{label}</h4>
      <p className="text-sm text-gray-500 font-medium">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        defaultChecked={defaultChecked}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A65E92]"></div>
    </label>
  </div>
);

export const NotificationsPage: React.FC = () => {
  return (
    <SettingsLayout
      title="Notifications"
      description="Choose how and when you want to be alerted."
    >
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">
          Clinical Alerts
        </h3>
        <ToggleSwitch
          label="High-Risk Assessment Alerts"
          description="Receive an immediate SMS and email when an assessment flags a patient as High Risk."
          defaultChecked
        />
        <ToggleSwitch
          label="Pending Review Reminders"
          description="Get a daily summary of assessments that require your review."
          defaultChecked
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">
          System & Account
        </h3>
        <ToggleSwitch
          label="Product Updates"
          description="News about new features and improvements to SafeMom."
        />
        <ToggleSwitch
          label="Billing Notifications"
          description="Receive receipts and payment failure alerts."
          defaultChecked
        />
      </div>

      <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
        <button className="bg-[#A65E92] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors">
          Save Preferences
        </button>
      </div>
    </SettingsLayout>
  );
};
