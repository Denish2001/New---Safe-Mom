import React from 'react';

interface SettingsLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6 md:px-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 font-heading mb-1">
          {title}
        </h1>
        {description && (
          <p className="text-gray-500 font-medium">{description}</p>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {children}
      </div>
    </div>
  );
};

// Reusable form input for settings pages
export const SettingsInput: React.FC<{
  label: string;
  defaultValue?: string;
  type?: string;
  isTextArea?: boolean;
}> = ({ label, defaultValue, type = 'text', isTextArea = false }) => (
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        defaultValue={defaultValue}
        className="w-full bg-gray-50/50 border border-gray-300 rounded-xl p-3 text-sm text-gray-900 font-medium focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] h-32 transition-all"
      />
    ) : (
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full bg-gray-50/50 border border-gray-300 rounded-xl p-3 text-sm text-gray-900 font-medium focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
      />
    )}
  </div>
);
