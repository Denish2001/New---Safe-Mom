import React from "react";
import { ImpactStatCard } from "./ImpactStatCard";
import type { ImpactStat } from "../../types";

const STATS_DATA: ImpactStat[] = [
  {
    value: "342",
    description: "Maternal deaths per 100,000 live births globally (WHO)",
  },
  { value: "1 in 5,000", description: "Patient-to-clinician ratio in Kenya" },
  {
    value: "90%+",
    description:
      "Of Kenyan mothers attend at least one antenatal visit — a window we can act in",
  },
  {
    value: "6.5%",
    description: "Of pregnant women affected by preeclampsia in Kenya",
  },
];

const QUOTES_DATA = [
  "Providers want a tool that reduces workload, not adds to it.",
  "Diagnosis today is time-consuming and relies heavily on clinical judgment alone.",
  "No existing tech support to flag at-risk mothers earlier in pregnancy.",
];

export const ImpactSection: React.FC = () => {
  return (
    <div className="bg-[#F8F5F8] min-h-screen pt-12 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Why this matters
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Kenya loses too many mothers to a condition that's detectable early.
            Here's the gap we're closing.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {STATS_DATA.map((stat, index) => (
            <ImpactStatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Clinician Quotes */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What clinicians told us
          </h2>

          <div className="bg-[#A65E92] rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/20">
            {QUOTES_DATA.map((quote, index) => (
              <div
                key={index}
                className="flex-1 p-10 flex flex-col justify-center relative group"
              >
                {/* Decorative Quote Mark */}
                <span className="absolute top-6 left-8 text-6xl text-white/10 font-serif leading-none group-hover:text-white/20 transition-colors">
                  "
                </span>
                <p className="text-white text-lg font-medium leading-relaxed relative z-10 pt-4">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
