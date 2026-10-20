import React, { useState } from "react";
import { LoginVisual, VitalsVisual, RiskScoreVisual } from "./ui/StepVisuals";

const STEPS = [
  {
    id: "step-1",
    number: 1,
    title: "Secure Login",
    description:
      "Access your clinical dashboard using your secure credentials. No complex setup or new workflow required.",
    visual: <LoginVisual />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    id: "step-2",
    number: 2,
    title: "Enter Patient Vitals",
    description:
      "Input the standard vitals and labs you already measure during an antenatal visit. The system supports partial data entry.",
    visual: <VitalsVisual />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
  {
    id: "step-3",
    number: 3,
    title: "Get Actionable Results",
    description:
      "Receive an instant risk score, the top contributing factors, and clear, evidence-based recommendations for the patient.",
    visual: <RiskScoreVisual />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="bg-gray-900 py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#A65E92] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#A65E92] rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#A65E92] font-bold tracking-widest uppercase text-sm mb-3 block">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-heading tracking-tight">
            Integrated into your day, <br className="hidden md:block" /> not
            added to it.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            SafeMom is designed to be intuitive. It takes less than 2 minutes to
            go from patient vitals to a clinical recommendation.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Clickable Steps */}
          <div className="w-full lg:w-1/2 space-y-4">
            {STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-white/10 border-white/20 shadow-2xl scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#A65E92] text-white"
                          : "bg-white/10 text-gray-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors ${isActive ? "text-white" : "text-gray-300"}`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${isActive ? "text-gray-300" : "text-gray-500"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Visuals */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* The visual container */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 flex items-center justify-center p-8 overflow-hidden">
              {/* Decorative ring */}
              <div className="absolute inset-0 border-[40px] border-white/5 rounded-full scale-110 pointer-events-none"></div>

              {/* Floating elements based on active step */}
              <div className="relative w-full transition-all duration-500 ease-in-out transform">
                {STEPS[activeStep].visual}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
