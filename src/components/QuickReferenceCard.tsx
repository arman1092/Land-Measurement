import { landUnits } from '../types/landUnits';

export const QuickReferenceCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">📏</span>
        Quick Reference Guide
      </h3>
      <div className="space-y-3">
        {Object.entries(landUnits).map(([key, unit]) => (
          <div
            key={key}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <div>
              <div className="font-semibold text-gray-800">
                1 {unit.name}
              </div>
              <div className="text-sm text-gray-600">({unit.hindiName})</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-emerald-600">
                {unit.toSquareMeters.toLocaleString()} m²
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
