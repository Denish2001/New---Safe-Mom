import React from 'react';
import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  product: [
    { label: 'How it works', path: '/#how-it-works' },
    { label: 'Our Impact', path: '/impact' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Security & Compliance', path: '/#' },
  ],
  company: [
    { label: 'About Us', path: '/#about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/#careers' },
    { label: 'Blog', path: '/#blog' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Data Protection (KDPA)', path: '/data-protection' },
  ],
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // The outer wrapper remains white to blend with the page content
    <div className="bg-white relative pt-12">
      {/* Top CTA Banner - Pulled up using negative margin, but floating over the gray footer area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 -mb-16 transform -translate-y-1/2">
        <div className="bg-gradient-to-r from-[#A65E92] to-[#7a3f6b] rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#A65E92]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-3 tracking-tight">
              Ready to protect more mothers?
            </h2>
            <p className="text-white/90 text-lg font-medium max-w-xl">
              Join leading hospitals across Kenya using SafeMom to detect
              preeclampsia earlier and save lives.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              to="/register"
              className="bg-white text-[#A65E92] px-8 py-3.5 rounded-xl font-bold text-center hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white border border-white/30 backdrop-blur-sm px-8 py-3.5 rounded-xl font-bold text-center hover:bg-white/20 transition-all duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Background starts here */}
      <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand & Newsletter Column */}
            <div className="lg:col-span-2 pr-0 lg:pr-8">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 bg-[#A65E92] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-extrabold text-gray-900 font-heading tracking-tight">
                  SafeMom
                </span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                Catching preeclampsia before it becomes an emergency.
                Data-driven early warning systems built for clinicians in
                resource-limited settings.
              </p>

              {/* Newsletter Input */}
              <div>
                <h3 className="text-gray-900 text-sm font-bold mb-3 uppercase tracking-wider">
                  Subscribe to updates
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex relative max-w-sm"
                >
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full bg-white border border-gray-300 text-sm text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-[#A65E92] focus:ring-2 focus:ring-[#A65E92]/20 transition-all placeholder:text-gray-400 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#A65E92] text-white px-4 rounded-lg text-sm font-bold hover:bg-[#8e4d7c] transition-colors shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Spacer for desktop */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Product Links */}
            <div>
              <h3 className="text-gray-900 text-sm font-bold mb-5 uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 font-medium hover:text-[#A65E92] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#A65E92] group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-gray-900 text-sm font-bold mb-5 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 font-medium hover:text-[#A65E92] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#A65E92] group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-gray-900 text-sm font-bold mb-5 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 font-medium hover:text-[#A65E92] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#A65E92] group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 font-medium">
              &copy; {currentYear} SafeMom Health. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                All systems operational
              </span>

              {/* Social Icons */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#A65E92] hover:border-[#A65E92] transition-all duration-300 shadow-sm"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#A65E92] hover:border-[#A65E92] transition-all duration-300 shadow-sm"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
