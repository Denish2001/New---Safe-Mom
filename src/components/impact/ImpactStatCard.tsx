import React from 'react';
import type { ImpactStat } from '../../types';

export const ImpactStatCard: React.FC<{ stat: ImpactStat }> = ({ stat }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-start shadow-sm hover:shadow-md hover:border-[#A65E92]/30 transition-all duration-300 group">
    <h3 className="text-4xl font-extrabold text-[#A65E92] mb-4 tracking-tight group-hover:scale-105 transform origin-left transition-transform">
      {stat.value}
    </h3>
    <p className="text-gray-600 text-lg leading-relaxed font-medium">
      {stat.description}
    </p>
  </div>
);
