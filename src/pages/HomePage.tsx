import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { HowItWorks } from '../components/HowItWorks';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <HowItWorks />
    </>
  );
};
