import React from 'react';
import type { PricingTier } from '../../types';
import { Link } from 'react-router-dom';

export const PricingCard: React.FC<{
  tier: PricingTier;
  isHighlighted?: boolean;
}> = ({ tier, isHighlighted }) => {
  return (
    <div
      className={`relative flex flex-col h-full bg-white rounded-3xl transition-all duration-300 ${
        isHighlighted
          ? 'border-2 border-[#A65E92] shadow-2xl scale-105 z-10'
          : 'border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      {/* Badge for highlighted plan */}
      {isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#A65E92] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div
        className={`p-8 border-b border-gray-100 ${isHighlighted ? 'pt-10' : ''}`}
      >
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
          {tier.name}
        </h3>
        <p className="text-gray-500 text-sm font-medium h-10">
          {tier.description}
        </p>
      </div>

      {/* Price & Features */}
      <div className="p-8 flex-grow">
        <div className="mb-8 flex items-baseline gap-1">
          <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
            {tier.price}
          </span>
          {tier.priceSubtext && (
            <span className="text-gray-500 font-medium">
              {tier.priceSubtext}
            </span>
          )}
        </div>

        <ul className="space-y-4">
          {tier.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-700 text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#A65E92"
                className="w-5 h-5 mr-3 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="p-8 mt-auto">
        <Link
          to={isHighlighted ? '/register' : '/contact'}
          className={`w-full block text-center font-bold text-lg py-3.5 rounded-xl transition-all duration-200 ${
            isHighlighted
              ? 'bg-[#A65E92] text-white hover:bg-[#8e4d7c] shadow-md hover:shadow-lg'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {tier.ctaText}
        </Link>
      </div>
    </div>
  );
};
