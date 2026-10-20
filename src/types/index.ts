import React from 'react';

export interface StepProps {
  number: number;
  title: string;
  description: string;
  visual: React.ReactNode;
  isLast?: boolean;
}
// ... existing types ...

export interface NavItem {
  label: string;
  href: string;
}

export interface ImpactStat {
  value: string;
  description: string;
}

export interface ClinicianQuote {
  quote: string;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}
// ... existing types ...

// --- App / Dashboard Types ---
export type RiskLevel = 'Pending' | 'Monitor' | 'Low Risk' | 'High Risk';

export interface Patient {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  weeksPregnant: number;
  lastSeen: string;
  riskLevel: RiskLevel;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Clinician' | 'Viewer' | 'Pending';
}

export interface Invitee {
  id: string;
  email: string;
  role: string;
}
// ... existing types ...

// --- Expanded App Types ---
export interface Visit {
  id: string;
  date: string;
  bp: string;
  protein: string;
  risk: 'High' | 'Low' | 'Monitor';
}

export interface PatientProfile {
  id: string;
  name: string;
  age: number;
  gestation: string;
  bmi: number;
  currentRiskScore: number;
  currentRiskLevel: string;
  visits: Visit[];
}

export interface AssessmentData {
  // Step 1: Demographics
  fullName: string;
  age: string;
  gestationalAge: string;
  occupation: string;
  height: string;
  weight: string;

  // Step 2: Vitals & Lab
  systolicBP: string;
  diastolicBP: string;
  proteinuria: string;
  fetalHeartRate: string;
  hemoglobin: string;
  pcv: string;
  platelets: string;
  cystatinC: string;
  pigfRatio: string;
  creatinine: string;
  pp13: string;
  glycerides: string;

  // Step 3: History
  chronicHypertension: boolean;
  diabetes: boolean;
  familyHistoryHTN: boolean;
  priorPreeclampsia: boolean;
  dietQuality: string;
  activityLevel: string;
  sleepHours: string;
}

export interface StepData {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}
