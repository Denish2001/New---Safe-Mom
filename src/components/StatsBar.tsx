import React from "react";

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-slate-900 w-full relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
        {[
          { value: "90%", label: "Model Accuracy" },
          {
            value: "76,000",
            label: "Deaths/year from hypertensive disorders globally",
          },
          { value: "20%", label: "Cause of Kenyan maternal deaths" },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex-1 p-10 md:p-14 flex flex-col justify-center group hover:bg-slate-800/50 transition-colors duration-300"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight group-hover:text-[#A65E92] transition-colors">
              {stat.value}
            </h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
