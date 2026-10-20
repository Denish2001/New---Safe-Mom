import React from "react";
import { useNavigate } from "react-router-dom";

export const PlaceholderPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-3xl font-bold text-[#A65E92] mb-4">
        Feature Coming Soon
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        This functionality (Printing, Exporting, API integrations) is currently
        under development.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-[#A65E92] text-white px-8 py-3 rounded font-bold hover:bg-[#8e4d7c]"
      >
        Go Back
      </button>
    </div>
  );
};
