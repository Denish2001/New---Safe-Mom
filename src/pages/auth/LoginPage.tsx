import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration - call auth API here
    console.log("Simulating successful login...");
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-[#F8F5F8] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A65E92] rounded-full translate-y-1/2 -translate-x-1/4 opacity-80"></div>

      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-[#A65E92] font-medium transition-colors z-20"
      >
        <span className="text-xl">←</span> Back to Home
      </Link>

      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row z-10 border border-gray-100">
        {/* Left Side - Logo */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0 border-r-0 md:border-r border-gray-100 md:pr-8">
          <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6 shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#A65E92] mb-2">SafeMom</h1>
          <p className="text-sm text-gray-500 tracking-[0.2em]">
            PREDICT • PREVENT • PROTECT
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 md:pl-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Log in to access your clinician dashboard.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                Clinician ID
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-colors"
              />
            </div>

            <div className="flex justify-end items-center text-sm">
              <a
                href="#"
                className="text-[#A65E92] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#A65E92] text-white font-bold text-lg py-3 rounded-lg hover:bg-[#8e4d7c] transition-colors shadow-sm mt-2"
            >
              Login
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#A65E92] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
