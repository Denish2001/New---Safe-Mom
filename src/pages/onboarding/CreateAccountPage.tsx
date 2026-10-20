import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FormInput: React.FC<{
  label: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
}> = ({ label, placeholder, type = "text", fullWidth }) => (
  <div className={`mb-4 ${fullWidth ? "w-full" : "w-full md:w-1/2"}`}>
    <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-colors"
    />
  </div>
);

export const CreateAccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Simulating successful account creation...");
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-[#F8F5F8] py-12 px-4 md:px-0 relative">
      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-8 left-8 md:left-12 flex items-center gap-2 text-gray-600 hover:text-[#A65E92] font-medium transition-colors z-20"
      >
        <span className="text-xl">←</span> Back to Home
      </Link>

      <div className="max-w-3xl mx-auto mt-8">
        {/* Success Banner */}
        <div className="bg-white border border-[#A65E92]/30 shadow-sm p-4 rounded-t-xl mb-6 text-center text-sm">
          <strong className="text-[#A65E92]">Payment confirmed</strong> —
          Facility Pro
          <br />
          <span className="text-gray-500">
            Now let's set up your facility's account.
          </span>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
          <h1 className="text-3xl font-bold text-[#A65E92] mb-2">
            Create your account
          </h1>
          <p className="text-gray-600 font-medium mb-8">
            You'll be the admin for your facility and can invite other
            clinicians afterward.
          </p>

          <form onSubmit={handleCreateAccount}>
            {/* Facility Details */}
            <h2 className="text-[#A65E92] font-bold uppercase text-sm mb-4 tracking-wider border-b border-gray-100 pb-2">
              Facility Details
            </h2>
            <FormInput
              label="Facility name"
              placeholder="e.g Kisumu County Hospital"
              fullWidth
            />
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <FormInput label="Facility Type" />
              <FormInput label="County" />
            </div>

            {/* Admin Account */}
            <h2 className="text-[#A65E92] font-bold uppercase text-sm mb-4 tracking-wider border-b border-gray-100 pb-2">
              Admin Account
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <FormInput label="Full Name" />
              <FormInput label="Role" />
            </div>
            <FormInput label="Work Email" type="email" fullWidth />
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <FormInput label="Password" type="password" />
              <FormInput label="Confirm Password" type="password" />
            </div>

            {/* Terms & Submit */}
            <div className="bg-[#F8F5F8] border border-gray-200 p-4 text-center text-sm text-gray-700 mb-6 rounded-lg">
              You can invite up to 12 more clinicians on the Pro plan once your
              account is set up.
            </div>

            <label className="flex items-start gap-3 mb-8 cursor-pointer text-sm text-gray-700">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 border-gray-300 text-[#A65E92] rounded focus:ring-[#A65E92]"
              />
              <span>
                I agree to the Terms of Service and confirm I'm authorized to
                register this facility.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#A65E92] text-white font-bold text-lg py-3.5 rounded-lg hover:bg-[#8e4d7c] transition-colors mb-6 shadow-sm"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#A65E92] font-semibold hover:underline"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
