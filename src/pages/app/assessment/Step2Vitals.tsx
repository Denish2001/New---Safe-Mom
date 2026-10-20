import { useNavigate } from 'react-router-dom';
import type { AssessmentData } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LabInput = ({ label, value, onChange }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
    />
  </div>
);

export const Step2Vitals = ({
  data,
  update,
}: {
  data: AssessmentData;
  update: (d: Partial<AssessmentData>) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 animate-fade-in">
      {/* Vitals Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#A65E92] mb-1">Vitals</h2>
        <p className="text-gray-500 text-sm mb-6">Measured at today's visit.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Systolic BP (mmHg)
            </label>
            <input
              type="number"
              value={data.systolicBP}
              onChange={(e) => update({ systolicBP: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 text-lg font-semibold text-gray-900 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
              placeholder="e.g. 120"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Diastolic BP (mmHg)
            </label>
            <input
              type="number"
              value={data.diastolicBP}
              onChange={(e) => update({ diastolicBP: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 text-lg font-semibold text-gray-900 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
              placeholder="e.g. 80"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Proteinuria
            </label>
            <select
              value={data.proteinuria}
              onChange={(e) => update({ proteinuria: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92]"
            >
              <option value="">Select value</option>
              <option>Negative</option>
              <option>Trace</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Fetal Heart Rate (bpm)
            </label>
            <input
              type="number"
              value={data.fetalHeartRate}
              onChange={(e) => update({ fetalHeartRate: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 text-lg text-gray-900 focus:outline-none focus:border-[#A65E92] focus:ring-1 focus:ring-[#A65E92] transition-all"
              placeholder="e.g. 140"
            />
          </div>
        </div>
      </div>

      {/* Lab Results Section */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#A65E92] mb-1">
              Lab Results
            </h2>
            <p className="text-gray-500 text-sm">
              Leave blank if not yet available.
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">
            Optional
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <LabInput
            label="Hemoglobin (g/dL)"
            value={data.hemoglobin}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ hemoglobin: e.target.value })}
          />
          <LabInput
            label="PCV (%)"
            value={data.pcv}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ pcv: e.target.value })}
          />
          <LabInput
            label="Platelets (x10⁹/L)"
            value={data.platelets}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ platelets: e.target.value })}
          />
          <LabInput
            label="Creatinine (mg/dL)"
            value={data.creatinine}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ creatinine: e.target.value })}
          />
          <LabInput
            label="Cystatin C (mg/L)"
            value={data.cystatinC}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ cystatinC: e.target.value })}
          />
          <LabInput
            label="PlGF:sFlt-1 ratio"
            value={data.pigfRatio}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ pigfRatio: e.target.value })}
          />
          <LabInput
            label="PP-13 (pg/mL)"
            value={data.pp13}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ pp13: e.target.value })}
          />
          <LabInput
            label="Glycerides (mg/dL)"
            value={data.glycerides}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => update({ glycerides: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
        <button
          onClick={() => navigate('/app/assessment/step-1')}
          className="px-6 py-2.5 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => navigate('/app/assessment/step-3')}
          className="bg-[#A65E92] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-[#8e4d7c] shadow-sm transition-colors"
        >
          Continue to History
        </button>
      </div>
    </div>
  );
};
