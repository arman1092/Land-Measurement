import { landUnits } from '../types/landUnits';

export const convertLandUnit = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  if (!landUnits[fromUnit] || !landUnits[toUnit]) {
    throw new Error('Invalid unit');
  }

  const valueInSquareMeters = value * landUnits[fromUnit].toSquareMeters;
  const result = valueInSquareMeters / landUnits[toUnit].toSquareMeters;

  return Math.round(result * 100000) / 100000;
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + 'K';
  }
  return num.toFixed(4);
};
