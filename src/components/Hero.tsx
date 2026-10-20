import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-[#F8F5F8]">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A65E92]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A65E92]/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Catch Preeclampsia <br className="hidden md:block" />
            <span className="text-[#A65E92]">Before</span> It Becomes An
            Emergency
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 max-w-lg">
            Safe Mom gives clinicians a data-driven early warning system, built
            on patient vitals and machine learning, so at-risk mothers get care
            in time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="bg-[#A65E92] text-white px-8 py-3.5 rounded-lg font-bold text-center hover:bg-[#8e4d7c] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Get Started
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              to="#how-it-works"
              className="bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex items-center justify-center"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Right Image Content */}
        <div
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Shape Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#A65E92] rounded-full opacity-90 blur-none"></div>

          {/* Main Image wrapper */}
          <div className="relative z-10 w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop"
              alt="Pregnant woman smiling"
              className="w-full object-cover rounded-t-[10rem] rounded-b-3xl shadow-2xl border-4 border-white mask-image-bottom"
            />

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900 leading-none mb-1">
                  90%
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Model Accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
