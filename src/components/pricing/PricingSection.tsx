import React from "react";
import { PricingCard } from "./PricingCard";
import type { PricingTier } from "../../types";

const PRICING_DATA: PricingTier[] = [
  {
    name: "Facility starter",
    description: "Single clinic, up to 500 patients/yr",
    price: "Free",
    priceSubtext: "first month",
    features: ["Risk prediction engine", "Patient records", "Email support"],
    ctaText: "Start Free Trial",
  },
  {
    name: "Facility pro",
    description: "Multi-ward, unlimited patients",
    price: "KSH 5000",
    priceSubtext: "/month",
    features: [
      "Everything in Starter",
      "Multi-clinician accounts",
      "On-site training",
      "Priority support",
    ],
    ctaText: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Enterprise & API",
    description: "Hospital networks, integrators",
    price: "Custom",
    priceSubtext: "",
    features: [
      "Everything in Pro",
      "API access & licensing",
      "Dedicated account manager",
    ],
    ctaText: "Contact Sales",
  },
];

export const PricingSection: React.FC = () => {
  return (
    <div className="bg-[#F8F5F8] min-h-screen pt-12 pb-24">
      <section className="max-w-6xl mx-auto px-6 animate-fade-in">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Pricing that fits your facility
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Start free for 30 days. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
          {PRICING_DATA.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              isHighlighted={tier.highlighted}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
