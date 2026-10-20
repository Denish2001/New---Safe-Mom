import React, { useState } from 'react';

export const CheckEmailPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const email = 'admin@hospital.org'; // TODO: Get from auth context/state

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus next input
    if (element.nextSibling && element.value !== '') {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-24 h-24 bg-gray-300 rounded-full mb-8"></div>
      <h1 className="text-3xl font-bold text-[#A65E92] mb-4">
        Check Your Email
      </h1>
      <p className="text-gray-600 mb-2">We sent a 6-digit code to</p>
      <p className="font-bold text-gray-900 mb-10">{email}</p>

      <div className="flex gap-2 md:gap-4 mb-8">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
            className="w-12 h-14 md:w-16 md:h-20 border border-[#A65E92] rounded text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[#A65E92]"
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-2">
        Didn't get it? Resend code in 0:42
      </p>
      <p className="text-sm text-gray-500">
        Check your spam folder, or use a different email
      </p>
    </div>
  );
};
