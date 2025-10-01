import { ArrowRight } from 'lucide-react';
import { landUnits } from '../types/landUnits';

interface ConversionCardProps {
  fromValue: number;
  fromUnit: string;
  toUnit: string;
  resultValue: number;
}

export const ConversionCard = ({
  fromValue,
  fromUnit,
  toUnit,
  resultValue,
}: ConversionCardProps) => {
  const fromUnitData = landUnits[fromUnit];
  const toUnitData = landUnits[toUnit];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">From</div>
          <div className="text-2xl font-bold text-gray-800">
            {fromValue.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-emerald-700 mt-1">
            {fromUnitData.name} ({fromUnitData.hindiName})
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="bg-emerald-500 p-3 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex-1 text-right">
          <div className="text-sm text-gray-600 mb-1">To</div>
          <div className="text-2xl font-bold text-emerald-600">
            {resultValue.toLocaleString(undefined, {
              maximumFractionDigits: 4,
            })}
          </div>
          <div className="text-sm font-medium text-emerald-700 mt-1">
            {toUnitData.name} ({toUnitData.hindiName})
          </div>
        </div>
      </div>
    </div>
  );
};
