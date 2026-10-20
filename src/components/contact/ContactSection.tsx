import React from "react";

const FormField: React.FC<{
  label: string;
  type?: string;
  isTextArea?: boolean;
  placeholder?: string;
}> = ({ label, type = "text", isTextArea = false, placeholder }) => (
  <div className="mb-5">
    <label className="block text-gray-700 text-sm font-semibold mb-2">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        placeholder={placeholder}
        className="w-full bg-gray-50/50 border border-gray-300 rounded-xl p-4 h-32 focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-2 focus:ring-[#A65E92]/20 transition-all text-gray-900"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-50/50 border border-gray-300 rounded-xl p-4 focus:bg-white focus:outline-none focus:border-[#A65E92] focus:ring-2 focus:ring-[#A65E92]/20 transition-all text-gray-900"
      />
    )}
  </div>
);

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#F8F5F8] min-h-screen pt-12 pb-24">
      <section className="max-w-6xl mx-auto px-6 animate-fade-in">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Reach out to us
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          {/* Left Column: Contact Info */}
          <div className="w-full md:w-2/5 bg-gray-50 p-10 md:p-12 border-r border-gray-100">
            <p className="text-xl font-bold text-gray-900 leading-relaxed mb-10">
              Whether you're a hospital, an NGO, or a potential partner, we're
              here to help.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A65E92]/10 flex items-center justify-center text-[#A65E92] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@safemom.health"
                    className="text-gray-900 font-semibold hover:text-[#A65E92] transition-colors"
                  >
                    hello@safemom.health
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A65E92]/10 flex items-center justify-center text-[#A65E92] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Based in
                  </h3>
                  <p className="text-gray-900 font-semibold">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Open Source */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Open Source
                  </h3>
                  <a
                    href="#"
                    className="text-[#A65E92] font-semibold hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-3/5 p-10 md:p-12">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <FormField label="Full Name" placeholder="Dr. Jane Doe" />
                </div>
                <div className="flex-1">
                  <FormField
                    label="Organization"
                    placeholder="Kisumu County Hospital"
                  />
                </div>
              </div>
              <FormField
                label="Work Email"
                type="email"
                placeholder="jane@hospital.org"
              />
              <FormField
                label="Message"
                isTextArea
                placeholder="How can we help you?"
              />

              <button className="w-full bg-[#A65E92] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#8e4d7c] shadow-md hover:shadow-lg transition-all duration-200 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
