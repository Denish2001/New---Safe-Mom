import React from 'react';
import { SettingsLayout } from './SettingsLayout';

export const BillingPage: React.FC = () => {
  return (
    <SettingsLayout
      title="Billing & plan"
      description="Manage your subscription, payment methods, and invoices."
    >
      {/* Current Plan */}
      <div className="bg-[#F8F5F8] border border-[#A65E92]/20 rounded-2xl p-6 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900 font-heading">
              Facility Pro
            </h3>
            <span className="bg-[#A65E92] text-white px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Active
            </span>
          </div>
          <p className="text-gray-600 font-medium">
            $199/month · Billed monthly
          </p>
          <p className="text-sm text-gray-500 font-medium mt-1">
            Next payment due on Oct 28, 2026
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-5 py-2.5 border border-[#A65E92] text-[#A65E92] rounded-xl font-bold hover:bg-white transition-colors text-sm">
            Cancel Plan
          </button>
          <button className="flex-1 md:flex-none px-5 py-2.5 bg-[#A65E92] text-white rounded-xl font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors text-sm">
            Upgrade
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-gray-900 font-heading mb-4">
          Payment Method
        </h3>
        <div className="border border-gray-200 rounded-xl p-4 flex justify-between items-center max-w-md bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center text-white font-bold italic text-xs">
              VISA
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                •••• •••• •••• 4242
              </p>
              <p className="text-xs text-gray-500 font-medium">Expires 12/28</p>
            </div>
          </div>
          <button className="text-[#A65E92] font-bold text-sm hover:underline">
            Edit
          </button>
        </div>
      </div>

      {/* Invoice History */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 font-heading mb-4">
          Invoice History
        </h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    Sep 28, 2026
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    $199.00
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#A65E92] font-bold text-sm hover:underline">
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SettingsLayout>
  );
};
