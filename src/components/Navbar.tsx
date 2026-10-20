import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Our Impact", path: "/impact" },
  { label: "Reach out to us", path: "/contact" },
  { label: "Pricing", path: "/pricing" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll for glass effect intensification
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col items-center px-4 pt-4 md:pt-6 pointer-events-none">
      {/* Main Floating Navbar */}
      <nav
        className={`pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2.5 w-full max-w-5xl rounded-full transition-all duration-300 border ${
          scrolled || mobileMenuOpen
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-gray-200/60"
            : "bg-white/40 backdrop-blur-md shadow-sm border-white/40"
        }`}
      >
        {/* Logo (Responsive Scaling) */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-[#A65E92]/10 rounded-full flex items-center justify-center text-[#A65E92] group-hover:bg-[#A65E92] group-hover:text-white transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-extrabold text-gray-900 leading-none tracking-tight font-heading">
              SafeMom
            </span>
            <span className="hidden sm:block text-[7px] md:text-[8px] font-bold text-[#A65E92] tracking-widest uppercase mt-0.5">
              Health for Moms
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/50 px-2 py-1 rounded-full border border-white/20">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#A65E92] shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <Link
            to={location.pathname === "/app" ? "/app" : "/register"}
            className="hidden sm:block bg-[#A65E92] text-white px-4 md:px-5 py-2 text-xs md:text-sm font-bold rounded-full hover:bg-[#8e4d7c] hover:shadow-md transition-all duration-200"
          >
            {location.pathname === "/app" ? "Dashboard" : "Start Free Trial"}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/80 text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`pointer-events-auto md:hidden w-full max-w-5xl mt-2 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-2xl rounded-2xl p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-[#A65E92]/10 text-[#A65E92]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <Link
            to={location.pathname === "/app" ? "/app" : "/register"}
            className="bg-[#A65E92] text-white px-4 py-3 text-center text-sm font-bold rounded-xl hover:bg-[#8e4d7c] transition-colors"
          >
            {location.pathname === "/app"
              ? "Go to Dashboard"
              : "Start Free Trial"}
          </Link>
        </div>
      </div>
    </div>
  );
};
