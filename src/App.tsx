import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'; // Ensure Footer is imported
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { CheckEmailPage } from './pages/onboarding/CheckEmailPage';
import { CreateAccountPage } from './pages/onboarding/CreateAccountPage';
import { Sidebar } from './components/app/Sidebar';
import { DashboardPage } from './pages/app/DashboardPage';
import { TeamSettingsPage } from './pages/app/TeamSettingsPage';
import { InviteTeamPage } from './pages/app/InviteTeamPage';
import { AllPatientsPage } from './pages/app/AllPatientsPage';
import { PatientProfilePage } from './pages/app/PatientProfilePage';
import { AssessmentWizard } from './pages/app/assessment/AssessmentWizard';
import { PlaceholderPage } from './pages/app/PlaceholderPage';

// Settings Pages (assuming these are created based on previous steps)
import { FacilityProfilePage } from './pages/app/settings/FacilityProfilePage';
import { BillingPage } from './pages/app/settings/BillingPage';
import { NotificationsPage } from './pages/app/settings/NotificationsPage';
import { DataPrivacyPage } from './pages/app/settings/DataPrivacyPage';
import { ReferralPage } from './pages/app/ReferralPage';

// Lazy loaded marketing pages
const ImpactSection = React.lazy(() =>
  import('./components/impact/ImpactSection').then((module) => ({
    default: module.ImpactSection,
  })),
);
const ContactSection = React.lazy(() =>
  import('./components/contact/ContactSection').then((module) => ({
    default: module.ContactSection,
  })),
);
const PricingSection = React.lazy(() =>
  import('./components/pricing/PricingSection').then((module) => ({
    default: module.PricingSection,
  })),
);

// --- UPDATED PUBLIC LAYOUT ---
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen font-sans bg-white flex flex-col">
    <Navbar />
    {/* 
      pt-24/pt-28: Pushes content down so it clears the floating Navbar.
      pb-16: Adds space at the bottom so the floating Footer CTA doesn't overlap your content.
    */}
    <main className="flex-grow pt-24 md:pt-28 pb-16">{children}</main>
    <Footer />
  </div>
);

// Layout component for the App (Has Sidebar)
const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen font-sans bg-[#F8F5F8] flex">
    <Sidebar />
    <main className="flex-grow ml-64 bg-white min-h-screen shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.1)]">
      {children}
    </main>
  </div>
);

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#A65E92] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* --- PUBLIC / MARKETING ROUTES --- */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <HomePage />
              </PublicLayout>
            }
          />
          <Route
            path="/impact"
            element={
              <PublicLayout>
                <ImpactSection />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <ContactSection />
              </PublicLayout>
            }
          />
          <Route
            path="/pricing"
            element={
              <PublicLayout>
                <PricingSection />
              </PublicLayout>
            }
          />

          {/* --- AUTH & ONBOARDING ROUTES --- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<CheckEmailPage />} />
          <Route path="/register" element={<CreateAccountPage />} />

          {/* --- APP / DASHBOARD ROUTES (Protected in real app) --- */}
          <Route
            path="/app"
            element={
              <AppLayout>
                <DashboardPage />
              </AppLayout>
            }
          />
          <Route
            path="/app/patients"
            element={
              <AppLayout>
                <AllPatientsPage />
              </AppLayout>
            }
          />
          <Route
            path="/app/patients/:id"
            element={
              <AppLayout>
                <PatientProfilePage />
              </AppLayout>
            }
          />

          {/* Assessment Wizard */}
          <Route
            path="/app/assessment/*"
            element={
              <AppLayout>
                <AssessmentWizard />
              </AppLayout>
            }
          />

          {/* Referral */}
          <Route
            path="/app/referral"
            element={
              <AppLayout>
                <ReferralPage />
              </AppLayout>
            }
          />

          {/* Settings */}
          <Route
            path="/app/settings/facility"
            element={
              <AppLayout>
                <FacilityProfilePage />
              </AppLayout>
            }
          />
          <Route
            path="/app/settings/team"
            element={
              <AppLayout>
                <TeamSettingsPage />
              </AppLayout>
            }
          />
          <Route
            path="/app/settings/team/invite"
            element={
              <AppLayout>
                <InviteTeamPage />
              </AppLayout>
            }
          />
          <Route
            path="/app/settings/billing"
            element={
              <AppLayout>
                <BillingPage />
              </AppLayout>
            }
          />
          <Route
            path="/app/settings/notifications"
            element={
              <AppLayout>
                <NotificationsPage />
              </AppLayout>
            }
          />
          <Route
            path="/app/settings/privacy"
            element={
              <AppLayout>
                <DataPrivacyPage />
              </AppLayout>
            }
          />

          {/* Placeholder for missing buttons */}
          <Route
            path="/app/placeholder"
            element={
              <AppLayout>
                <PlaceholderPage />
              </AppLayout>
            }
          />

          {/* Catch all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
