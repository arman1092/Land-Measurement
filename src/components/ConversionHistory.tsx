import { Clock, Trash2 } from 'lucide-react';
import { ConversionResult } from '../types/landUnits';
import { landUnits } from '../types/landUnits';

interface ConversionHistoryProps {
  history: ConversionResult[];
  onClear: () => void;
}

export const ConversionHistory = ({
  history,
  onClear,
}: ConversionHistoryProps) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-600" />
          Recent Conversions
        </h3>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {history.map((item, index) => {
          const fromUnit = landUnits[item.fromUnit];
          const toUnit = landUnits[item.toUnit];

          return (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="font-bold text-gray-800">
                    {item.fromValue.toLocaleString()}
                  </span>
                  <span className="text-gray-600 mx-2">
                    {fromUnit.name} ({fromUnit.hindiName})
                  </span>
                </div>
                <div className="text-emerald-600 mx-3">→</div>
                <div className="flex-1 text-right">
                  <span className="font-bold text-emerald-600">
                    {item.resultValue.toLocaleString(undefined, {
                      maximumFractionDigits: 4,
                    })}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {toUnit.name} ({toUnit.hindiName})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
