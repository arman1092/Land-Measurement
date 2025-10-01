import { landUnits } from '../types/landUnits';

interface UnitSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export const UnitSelector = ({ value, onChange, label }: UnitSelectorProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white text-gray-800 font-medium"
      >
        {Object.entries(landUnits).map(([key, unit]) => (
          <option key={key} value={key}>
            {unit.name} ({unit.hindiName})
          </option>
        ))}
      </select>
    </div>
  );
};
